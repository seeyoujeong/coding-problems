class Solution:
    def findMissingElements(self, nums: list[int]) -> list[int]:
        min_num = min(nums)
        max_num = max(nums)
        num_set = set(nums)

        return [num for num in range(min_num, max_num+1) if num not in num_set]