class Solution:
    def findNumbers(self, nums: list[int]) -> int:
        return len([num for num in nums if len(str(num)) % 2 == 0])