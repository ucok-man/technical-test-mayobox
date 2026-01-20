package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func (app *application) getAllFAQHandler(ctx echo.Context) error {
	faqs, metadata, err := app.models.FAQ.GetAll()
	if err != nil {
		return app.ErrInternalServer(err, "failed get all faqs", ctx.Request())
	}

	return ctx.JSON(http.StatusOK, envelope{
		"data":     faqs,
		"metadata": metadata,
	})
}
