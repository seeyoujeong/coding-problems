class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        result = []

        for i, num in enumerate(nums[:n]):
            result.append(num)
            result.append(nums[n + i])

        return result