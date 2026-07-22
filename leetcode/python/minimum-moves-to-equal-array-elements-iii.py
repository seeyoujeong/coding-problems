class Solution:
    def minMoves(self, nums: list[int]) -> int:
        max_num = max(nums)

        return sum(max_num - num for num in nums)