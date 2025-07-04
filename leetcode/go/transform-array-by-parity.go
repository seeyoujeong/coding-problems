package main

import "sort"

func TransformArray(nums []int) []int {
	for i, v := range nums {
		if v % 2 == 0 {
			nums[i] = 0
		} else {
			nums[i] = 1
		}
	}

	sort.Ints(nums)

	return nums
}