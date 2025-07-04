package main

func TwoSum(nums []int, target int) []int {
	hashMap := make(map[int]int)

	for i, num := range nums {
			if v, ok := hashMap[target - num]; ok {
					return []int{v, i}
			}

			hashMap[num] = i
	}

	return nil
}