package data

import (
	"context"
	"database/sql"
	"time"
)

type FAQ struct {
	ID           string    `json:"id"`
	Question     string    `json:"question"`
	DisplayOrder int       `json:"displayOrder"`
	CreatedAt    time.Time `json:"createdAt"`
	UpdatedAt    time.Time `json:"updatedAt"`
}

type FAQAnswer struct {
	ID           string    `json:"id"`
	FAQID        string    `json:"faqId"`
	Short        string    `json:"short"`
	Long         string    `json:"long"`
	DisplayOrder int       `json:"displayOrder"`
	CreatedAt    time.Time `json:"createdAt"`
}

type FAQModel struct {
	db *sql.DB
}

/* ---------------------------- METHOD ---------------------------- */
type FAQWithAnswers struct {
	FAQ
	Answers []*FAQAnswer
}

func (m FAQModel) GetAll() ([]*FAQWithAnswers, *Metadata, error) {
	query := `
	SELECT
		count(*) OVER() AS total_count,

		-- faq
		f.id,
		f.question,
		f.display_order,
		f.created_at,
		f.updated_at,

		-- faq answers
		fa.id,
		fa.faq_id,
		fa.short,
		fa.long,
		fa.display_order,
		fa.created_at
	FROM faqs f
	LEFT JOIN faq_answers fa
		ON fa.faq_id = f.id
	ORDER BY f.display_order ASC, fa.display_order ASC;
	`

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	rows, err := m.db.QueryContext(ctx, query)
	if err != nil {
		return nil, nil, err
	}
	defer rows.Close()

	faqMap := make(map[string]*FAQWithAnswers)
	var totalRecords int

	for rows.Next() {
		var (
			faq   FAQ
			ans   FAQAnswer
			ansID sql.NullString
		)

		err := rows.Scan(
			&totalRecords,

			// faq
			&faq.ID,
			&faq.Question,
			&faq.DisplayOrder,
			&faq.CreatedAt,
			&faq.UpdatedAt,

			// answer (nullable because LEFT JOIN)
			&ansID,
			&ans.FAQID,
			&ans.Short,
			&ans.Long,
			&ans.DisplayOrder,
			&ans.CreatedAt,
		)
		if err != nil {
			return nil, nil, err
		}

		// init FAQ if not exists
		if _, ok := faqMap[faq.ID]; !ok {
			faqMap[faq.ID] = &FAQWithAnswers{
				FAQ:     faq,
				Answers: []*FAQAnswer{},
			}
		}

		// append answer if exists
		if ansID.Valid {
			ans.ID = ansID.String
			faqMap[faq.ID].Answers = append(
				faqMap[faq.ID].Answers,
				&ans,
			)
		}
	}

	if err = rows.Err(); err != nil {
		return nil, nil, err
	}

	// convert map → slice (ordered)
	faqs := make([]*FAQWithAnswers, 0, len(faqMap))
	for _, faq := range faqMap {
		faqs = append(faqs, faq)
	}

	return faqs, nil, nil
}
