class Solution1:
    def smallerNumbersThanCurrent(self, nums: list[int]) -> list[int]:
        result = [0] * len(nums)

        for i, n1 in enumerate(nums):
            for j, n2 in enumerate(nums):
                if i != j and n1 > n2:
                    result[i] += 1
        
        return result

class Solution2:
    def smallerNumbersThanCurrent(self, nums: list[int]) -> list[int]:
        sorted_nums = sorted(nums)
        dict_nums = {}

        for i, n in enumerate(sorted_nums):
            if n not in dict_nums:
                dict_nums[n] = i

        return [dict_nums[n] for n in nums]