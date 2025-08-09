package main

import "slices"	

func ThreeSum(nums []int) [][]int {
	result := make([][]int, 0)

	slices.Sort(nums)

	for i := range len(nums) - 2 {
			if nums[i] > 0 {
					break
			}

			if 0 < i && nums[i - 1] == nums[i] {
					continue
			}

			j := i + 1
			k := len(nums) - 1

			for j < k {
					sum := nums[i] + nums[j] + nums[k]

					if sum == 0 {
							result = append(result, []int{nums[i], nums[j], nums[k]})

							for j < k && nums[j] == nums[j + 1] {
									j++
							}

							for j < k && nums[k] == nums[k - 1] {
									k--
							}
					}

					if sum < 0 {
							j++
					} else {
							k--
					}
			}
	}

	return result
}