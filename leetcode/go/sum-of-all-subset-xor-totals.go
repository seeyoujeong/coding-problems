package main

func SubsetXORSum(nums []int) int {
	result := 0

	addXOR(0, 0, nums, &result)

	return result
}

func addXOR(idx int, res int, nums []int, sum *int) {
	*sum += res

	 for i := idx; i < len(nums); i++ {
			addXOR(i + 1, res ^ nums[i], nums, sum)
	}
}
