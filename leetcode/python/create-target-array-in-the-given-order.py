class Solution:
    def createTargetArray(self, nums: list[int], index: list[int]) -> list[int]:
        result = []

        for i, n in zip(index, nums):
            result.insert(i, n)

        return result