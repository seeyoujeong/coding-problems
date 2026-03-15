class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        return len([n for n in nums if n < k])