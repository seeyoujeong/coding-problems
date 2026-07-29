class Solution:
    def separateDigits(self, nums: list[int]) -> list[int]:
        result = []

        for num in nums:
            result.extend(map(int, str(num)))
        
        return result