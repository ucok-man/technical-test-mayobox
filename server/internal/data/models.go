package data

import (
	"database/sql"
	"errors"
)

var (
	ErrRecordNotFound = errors.New("record not found")
	ErrEditConflict   = errors.New("edit conflict")
)

type TestimoniModeler interface {
	GetAll(param TestimoniGetAllParam) ([]*TestimoniWithUser, *Metadata, error)
}

type FAQModeler interface {
	GetAll() ([]*FAQWithAnswers, *Metadata, error)
}

type Models struct {
	Testimoni TestimoniModeler
	FAQ       FAQModeler
}

func NewModels(db *sql.DB) Models {
	return Models{
		Testimoni: TestimoniModel{db: db},
		FAQ:       FAQModel{db: db},
	}
}
