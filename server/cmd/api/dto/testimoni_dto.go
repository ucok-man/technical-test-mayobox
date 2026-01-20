package dto

type TestimoniGetAllDTO struct {
	Pagination struct {
		Page     *int `query:"page" validate:"omitempty,min=1,max=1000"`
		PageSize *int `query:"page_size" validate:"omitempty,min=1,max=100"`
	}
}
