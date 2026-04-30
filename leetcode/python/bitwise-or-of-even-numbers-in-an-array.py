class Solution:
    def evenNumberBitwiseORs(self, nums: list[int]) -> int:
        result = 0

        for num in nums:
            if num % 2 == 0:
                result = result | num

        return result