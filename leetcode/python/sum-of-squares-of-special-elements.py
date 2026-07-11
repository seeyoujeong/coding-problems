class Solution:
    def sumOfSquares(self, nums: list[int]) -> int:
        return sum([n**2 for i, n in enumerate(nums) if len(nums) % (i + 1) == 0])