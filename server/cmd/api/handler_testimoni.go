package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/ucok-man/mayobox-server/cmd/api/dto"
	"github.com/ucok-man/mayobox-server/internal/data"
	"github.com/ucok-man/mayobox-server/internal/utility"
)

func (app *application) getAllTestimoniHandler(ctx echo.Context) error {
	var dto dto.TestimoniGetAllDTO

	// Set Default Value
	dto.Pagination.Page = utility.SetPtrValue(1)
	dto.Pagination.PageSize = utility.SetPtrValue(10)

	if err := ctx.Bind(&dto); err != nil {
		return app.ErrBadRequest(err.Error())
	}

	if err := ctx.Validate(&dto); err != nil {
		return app.ErrFailedValidation(err)
	}

	testimonies, metadata, err := app.models.Testimoni.GetAll(data.TestimoniGetAllParam{
		Page:     *dto.Pagination.Page,
		PageSize: *dto.Pagination.PageSize,
	})
	if err != nil {
		return app.ErrInternalServer(err, "failed get all testimonies", ctx.Request())
	}

	return ctx.JSON(http.StatusOK, envelope{
		"data":     testimonies,
		"metadata": metadata,
	})
}
