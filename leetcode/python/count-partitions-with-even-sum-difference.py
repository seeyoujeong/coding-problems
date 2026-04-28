class Solution:
    def countPartitions(self, nums: list[int]) -> int:
        result = 0

        for i in range(1, len(nums)):
            left_sum = sum(nums[0:i])
            right_sum = sum(nums[i:])

            if (left_sum - right_sum) % 2 == 0:
                result += 1
        
        return result