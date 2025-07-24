package main

import "strings"

func FinalValueAfterOperations(operations []string) int {
	result := 0

	for _, oper := range operations {
			if strings.Contains(oper, "+") {
					result++
			} else {
					result--
			}
	}

	return result
}