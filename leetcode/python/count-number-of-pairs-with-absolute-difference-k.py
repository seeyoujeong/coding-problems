class Solution:
    def countKDifference(self, nums: list[int], k: int) -> int:
        result = 0
        n = len(nums)

        for i in range(n):
            for j in range(i+1, n):
                if abs(nums[i] - nums[j]) == k:
                    result += 1
        
        return result