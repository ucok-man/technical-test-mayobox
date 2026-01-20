-- +goose Up
-- +goose StatementBegin
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  question TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,

  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE faq_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  faq_id UUID NOT NULL REFERENCES faqs(id) ON DELETE CASCADE,

  short TEXT NOT NULL,
  long TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,

  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS faq_answers;
DROP TABLE IF EXISTS faqs;
-- +goose StatementEnd
