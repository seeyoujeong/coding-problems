class Solution:
    def minElement(self, nums: list[int]) -> int:
        return min([sum([int(n) for n in str(num)]) for num in nums])