package main

func DifferenceOfSums(n int, m int) int {
	num1 := 0
	num2 := 0

	for v := range n + 1 {
			if v % m == 0 {
					num2 += v
			} else {
					num1 += v
			}
	}

	return num1 - num2
}