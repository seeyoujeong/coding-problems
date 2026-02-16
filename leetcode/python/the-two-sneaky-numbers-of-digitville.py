class Solution:
    def getSneakyNumbers(self, nums: list[int]) -> list[int]:
        return [n for n in range(len(nums) - 2) if nums.count(n) == 2]
    
from collections import Counter

class Solution1:
    def getSneakyNumbers(self, nums: list[int]) -> list[int]:
        return [key for key, val in Counter(nums).items() if val == 2]