package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/ucok-man/mayobox-server/internal/serializer"
	"github.com/ucok-man/mayobox-server/internal/validator"
)

func (app *application) routes() http.Handler {
	ec := echo.New()
	ec.JSONSerializer = serializer.New()
	ec.Validator = validator.New()
	ec.Logger = app.logger
	ec.HTTPErrorHandler = app.HTTPErrorHandler

	ec.Use(app.withRecover())
	ec.Use(app.withCORS())
	ec.Use(app.withRequestLogger())

	// Documentation routes
	ec.FileFS("/swagger.yaml", "docs/swagger.yaml", swaggerFile)
	ec.GET("/docs", app.serveSwaggerUI)

	// Health check
	ec.GET("/", app.healthcheckHandler)

	// Main Routes
	v1 := ec.Group("/v1")

	testimonies := v1.Group("/testimonies")
	{
		testimonies.GET("", app.getAllTestimoniHandler)
	}
	faqs := v1.Group("/faqs")
	{
		faqs.GET("", app.getAllFAQHandler)
	}

	return ec
}
