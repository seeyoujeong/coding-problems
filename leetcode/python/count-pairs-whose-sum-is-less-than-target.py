class Solution:
    def countPairs(self, nums: list[int], target: int) -> int:
        result = 0

        for i, n in enumerate(nums):
            for j in range(i + 1, len(nums)):
                if n + nums[j] < target:
                    result += 1
        
        return result