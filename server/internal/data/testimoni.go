package data

import (
	"context"
	"database/sql"
	"time"
)

type Testimoni struct {
	ID        string    `json:"id"`
	UserID    string    `json:"userId"`
	Testimoni string    `json:"testimoni"`
	IconURL   string    `json:"iconUrl"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

type TestimoniModel struct {
	db *sql.DB
}

/* ---------------------------- METHOD ---------------------------- */

type TestimoniGetAllParam struct {
	Page     int
	PageSize int
}

type TestimoniWithUser struct {
	Testimoni
	User User
}

func (m TestimoniModel) GetAll(param TestimoniGetAllParam) ([]*TestimoniWithUser, *Metadata, error) {
	query := `
	SELECT 
		count(*) OVER() AS total_count,

		-- testimonies fields
		t.id,
		t.user_id,
		t.testimoni,
		t.icon_url,
		t.created_at,
		t.updated_at,

		-- users fields
		u.id,
		u.username,
		u.email,
		u.image_url,
		u.address_line,
		u.city,
		u.province,
		u.postal_code,
		u.country,
		u.created_at,
		u.updated_at

	FROM testimonies t
	INNER JOIN users u ON t.user_id = u.id
	ORDER BY t.created_at DESC, t.id ASC
	LIMIT $1 OFFSET $2;`

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	limit := param.PageSize
	offset := calculatePageOffset(param.Page, param.PageSize)

	args := []any{limit, offset}
	rows, err := m.db.QueryContext(ctx, query, args...)
	if err != nil {
		return nil, nil, err
	}
	defer rows.Close()

	var totalRecords int
	var testimonies []*TestimoniWithUser

	for rows.Next() {
		var (
			testimoni Testimoni
			user      User
		)

		err := rows.Scan(
			&totalRecords,

			// testimonies
			&testimoni.ID,
			&testimoni.UserID,
			&testimoni.Testimoni,
			&testimoni.IconURL,
			&testimoni.CreatedAt,
			&testimoni.UpdatedAt,

			// users
			&user.ID,
			&user.Username,
			&user.Email,
			&user.ImageUrl,
			&user.AddressLine,
			&user.City,
			&user.Province,
			&user.PostalCode,
			&user.Country,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		if err != nil {
			return nil, nil, err
		}

		testimonies = append(testimonies, &TestimoniWithUser{
			Testimoni: testimoni,
			User:      user,
		})
	}

	if err = rows.Err(); err != nil {
		return nil, nil, err
	}

	metadata := calculateMetadata(totalRecords, param.Page, param.PageSize)
	return testimonies, &metadata, nil
}
