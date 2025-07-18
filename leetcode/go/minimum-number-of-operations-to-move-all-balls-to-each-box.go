package main

import "math"

func MinOperations1(boxes string) []int {
	balls := make([]int, 0)

	for i, v := range boxes {
			if v == '1' {
					balls = append(balls, i)
			}
	}

	result := make([]int, 0)

	for i := range boxes {
			sum := 0

			for _, v := range balls {
					sum += int(math.Abs(float64(v - i)))
			}

			result = append(result, sum)
	}

	return result
}

func MinOperations2(boxes string) []int {
	n := len(boxes)
	right := make([]int, n)
	left := make([]int, n)
	sum := 0
	count := 0

	for i := n - 1; i >= 0; i-- {
			sum += count
			right[i] = sum
			if boxes[i] == '1' {
					count++
			}
	}

	sum = 0
	count = 0

	for i := 0; i < n; i++ {
			sum += count
			left[i] = sum

			if boxes[i] == '1' {
					count++
			}
	}


	ans := make([]int, n)

	for i := 0; i < n; i++ {
			ans[i] = left[i] + right[i]
	}

	return ans
}