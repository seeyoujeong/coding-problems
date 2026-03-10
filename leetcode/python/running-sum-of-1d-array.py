class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        return [sum(nums[:i]) for i in range(1, len(nums) + 1)]
    
class Solution1:
    def runningSum(self, nums: list[int]) -> list[int]:
        result = [nums[0]]

        for i in range(1, len(nums)):
            result.append(result[i - 1] + nums[i])

        return result