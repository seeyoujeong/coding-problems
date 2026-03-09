class Solution:
    def getFinalState(self, nums: list[int], k: int, multiplier: int) -> list[int]:
        for _ in range(k):
            min_num = min(nums)
            i = nums.index(min_num)

            nums[i] *= multiplier

        return nums