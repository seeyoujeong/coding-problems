class Solution:
    def minBitwiseArray(self, nums: list[int]) -> list[int]:
        result = []

        for num in nums:
            tmp = -1

            for n in range(1, num):
                if n | (n + 1) == num:
                    tmp = n
                    break

            result.append(tmp)
        
        return result