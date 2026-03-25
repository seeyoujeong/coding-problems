class Solution:
    def minimumSum(self, num: int) -> int:
        nums = sorted(list(str(num)))
        n1 = int(str(nums[0]) + str(nums[2]))
        n2 = int(str(nums[1]) + str(nums[3]))

        return n1 + n2