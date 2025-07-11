package main

import "strings"

func FindWordsContaining(words []string, x byte) []int {
	result := make([]int, 0)

	for i, word := range words {
			if strings.Contains(word, string(x)) {
					result = append(result, i)
			}
	}

	return result
}
