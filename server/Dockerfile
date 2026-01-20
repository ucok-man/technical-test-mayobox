# Build stage
FROM golang:1.25.0-alpine AS builder

RUN apk add --no-cache make
WORKDIR /app

COPY go.mod go.sum ./
COPY vendor/ ./vendor/
COPY . .
RUN make build

# Runtime stage
FROM alpine:latest

WORKDIR /app

# Create non-root user
RUN addgroup -g 1000 mayobox.api && \
    adduser -D -u 1000 -G mayobox.api mayobox.api

# Copy with ownership set directly
COPY --from=builder --chown=mayobox.api:mayobox.api /app/bin/api .
COPY --from=builder --chown=mayobox.api:mayobox.api /app/cmd/api/docs ./cmd/api/docs

USER mayobox.api
EXPOSE 4000

CMD ["./api"]