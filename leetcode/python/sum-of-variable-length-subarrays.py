class Solution:
    def subarraySum(self, nums: list[int]) -> int:
        result = 0

        for i, n in enumerate(nums):
            start = max(0, i - n)
            result += sum(nums[start:i+1])

        return result