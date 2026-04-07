class Solution:
    def arithmeticTriplets(self, nums: list[int], diff: int) -> int:
        result = 0
        n = len(nums)

        for i in range(n):
            for j in range(i+1, n):
                if nums[j] - nums[i] == diff:
                    for k in range(j+1, n):
                        if nums[k] - nums[j] == diff:
                            result += 1
        
        return result
    
class Solution1:
    def arithmeticTriplets(self, nums: list[int], diff: int) -> int:
        num_set = set(nums)
        count = 0
        
        for x in nums:
            if x + diff in num_set and x + 2*diff in num_set:
                count += 1
        
        return count
