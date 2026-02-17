class Solution:
    def alternatingSum(self, nums: list[int]) -> int:
        return sum([n if i % 2 == 0 else -n for i, n in enumerate(nums)])
    
class Solution1:
    def alternatingSum(self, nums: list[int]) -> int:
        return sum(nums[::2]) - sum(nums[1::2])