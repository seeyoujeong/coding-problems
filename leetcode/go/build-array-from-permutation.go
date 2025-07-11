package main

func BuildArray(nums []int) []int {
	ans := make([]int, 0)

	for i := range len(nums) {
			ans = append(ans, nums[nums[i]])
	}

	return ans
}
