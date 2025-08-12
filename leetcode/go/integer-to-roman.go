package main

import "strings"

func IntToRoman(num int) string {
	type Roman struct {
			val int
			symbol string
	}

	romanMap := [...]Roman{
			{1000, "M"},
			{900, "CM"},
			{500, "D"},
			{400, "CD"},
			{100, "C"},
			{90, "XC"},
			{50, "L"},
			{40, "XL"},
			{10, "X"},
			{9, "IX"},
			{5, "V"},
			{4, "IV"},
			{1, "I"},
	}

	var result strings.Builder

	for _, roman := range romanMap {
		for num >= roman.val {
				num -= roman.val
				result.WriteString(roman.symbol)
		}
}

	return result.String()
}