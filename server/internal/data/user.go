package data

import "time"

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	ImageUrl string `json:"imageUrl"` // never expose

	// Address
	AddressLine string `json:"addressLine,omitempty"`
	City        string `json:"city,omitempty"`
	Province    string `json:"province,omitempty"`
	PostalCode  string `json:"postalCode,omitempty"`
	Country     string `json:"country,omitempty"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}
