package main

func PivotArray(nums []int, pivot int) []int {
	result := make([]int, len(nums))
	n := len(nums) - 1
	left := 0
	right := n

	for i := range n + 1 {
			if nums[i] < pivot {
					result[left] = nums[i]
					left++
			}

			if nums[n - i] > pivot {
					result[right] = nums[n - i]
					right--
			}
	}

	for left <= right {
			result[left] = pivot
			left++
	}

	return result
}