package data

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCalculateMetadata(t *testing.T) {
	t.Run("returns empty metadata when no records", func(t *testing.T) {
		result := calculateMetadata(0, 1, 10)

		assert.Equal(t, Metadata{}, result)
	})

	t.Run("calculates correct metadata for single page", func(t *testing.T) {
		result := calculateMetadata(5, 1, 10)

		assert.Equal(t, 1, result.CurrentPage)
		assert.Equal(t, 10, result.PageSize)
		assert.Equal(t, 1, result.FirstPage)
		assert.Equal(t, 1, result.LastPage)
		assert.Equal(t, 5, result.TotalRecords)
	})

	t.Run("calculates correct metadata for multiple pages", func(t *testing.T) {
		result := calculateMetadata(25, 2, 10)

		assert.Equal(t, 2, result.CurrentPage)
		assert.Equal(t, 10, result.PageSize)
		assert.Equal(t, 1, result.FirstPage)
		assert.Equal(t, 3, result.LastPage)
		assert.Equal(t, 25, result.TotalRecords)
	})

	t.Run("calculates last page correctly when records divide evenly", func(t *testing.T) {
		result := calculateMetadata(30, 1, 10)

		assert.Equal(t, 3, result.LastPage)
		assert.Equal(t, 30, result.TotalRecords)
	})

	t.Run("calculates last page correctly when records don't divide evenly", func(t *testing.T) {
		result := calculateMetadata(31, 1, 10)

		assert.Equal(t, 4, result.LastPage)
		assert.Equal(t, 31, result.TotalRecords)
	})

	t.Run("handles edge case with 1 record", func(t *testing.T) {
		result := calculateMetadata(1, 1, 10)

		assert.Equal(t, 1, result.LastPage)
		assert.Equal(t, 1, result.TotalRecords)
	})

	t.Run("handles large page sizes", func(t *testing.T) {
		result := calculateMetadata(100, 1, 50)

		assert.Equal(t, 2, result.LastPage)
		assert.Equal(t, 50, result.PageSize)
	})
}

func TestCalculatePageOffset(t *testing.T) {
	tests := []struct {
		name     string
		page     int
		pageSize int
		expected int
	}{
		{
			name:     "first page with page size 10",
			page:     1,
			pageSize: 10,
			expected: 0,
		},
		{
			name:     "second page with page size 10",
			page:     2,
			pageSize: 10,
			expected: 10,
		},
		{
			name:     "third page with page size 20",
			page:     3,
			pageSize: 20,
			expected: 40,
		},
		{
			name:     "page 5 with page size 25",
			page:     5,
			pageSize: 25,
			expected: 100,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := calculatePageOffset(tt.page, tt.pageSize)
			assert.Equal(t, tt.expected, result)
		})
	}
}
