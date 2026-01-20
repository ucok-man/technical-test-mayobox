# Include all .env* EXCEPT .example
ENV_FILES := $(filter-out %.example, $(wildcard .env*))
-include $(ENV_FILES)

# ------------------------------------------------------------------ #
#                               HELPERS                              #
# ------------------------------------------------------------------ #

## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^//'


# ------------------------------------------------------------------ #
#                          Compose Script                            #
# ------------------------------------------------------------------ #

## compose/up: run api and database using docker compose
.PHONY: compose/up
compose/up:
	docker compose up --build
	
## compose/clear: clear api and database container artifact
.PHONY: compose/clear
compose/clear:
	@echo 'Cleaning up artifact...'
	@docker compose down -v
