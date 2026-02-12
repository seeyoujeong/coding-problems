class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        s = sum(nums)

        return s % k