class Solution:
    def leftRightDifference(self, nums: list[int]) -> list[int]:
        left_sum = [0]
        right_sum = [0]

        for i in range(len(nums) - 1):
            left_sum.append(left_sum[i] + nums[i])

        for i in range(len(nums) - 1, 0, -1):
            right_sum.insert(0, right_sum[0] + nums[i])

        return [abs(l_n - r_n) for l_n, r_n in zip(left_sum, right_sum)]
    
class Solution1:
    def leftRightDifference(self, nums: list[int]) -> list[int]:
        n = len(nums)
        left_sum = [0] * n
        right_sum = [0] * n

        for i in range(n - 1):
            left_sum[i + 1] = left_sum[i] + nums[i]
        
        for i in range(n - 1, 0, -1):
            right_sum[i - 1] = right_sum[i] + nums[i]
        
        return [abs(l - r) for l, r in zip(left_sum, right_sum)]
    
class Solution2:
    def leftRightDifference(self, nums: list[int]) -> list[int]:
        left_sum = 0
        right_sum = sum(nums)
        result = []

        for n in nums:
            right_sum -= n
            result.append(abs(left_sum - right_sum))
            left_sum += n
        
        return result