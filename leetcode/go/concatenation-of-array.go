package main

func GetConcatenation(nums []int) []int {
	return append(nums, nums...)
}