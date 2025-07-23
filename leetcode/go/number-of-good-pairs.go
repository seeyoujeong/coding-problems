package main

func NumIdenticalPairs(nums []int) int {
	result := 0

	for i := range len(nums) - 1 {
			for j := i + 1; j < len(nums); j++ {
					if nums[i] == nums[j] {
							result++
					}
			}
	}

	return result
}