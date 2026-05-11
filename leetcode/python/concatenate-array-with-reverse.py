class Solution:
    def concatWithReverse(self, nums: list[int]) -> list[int]:
        n = len(nums)
        result = [0] * 2 * n

        for i, num in enumerate(nums):
            result[i] = num
            result[i + n] = nums[n - i - 1]

        return result 

class Solution:
    def concatWithReverse(self, nums: list[int]) -> list[int]:
        return nums + nums[::-1]