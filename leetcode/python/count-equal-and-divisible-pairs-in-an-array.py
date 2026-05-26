class Solution:
    def countPairs(self, nums: list[int], k: int) -> int:
        result = 0
        n = len(nums)

        for i in range(n):
            for j in range(i+1, n):
                if nums[i] == nums[j] and (i * j) % k == 0:
                    result += 1
        
        return result
    
from collections import defaultdict

class Solution:
    def countPairs(self, nums: list[int], k: int) -> int:
        result = 0
        nums_dict = defaultdict(list)

        for i, num in enumerate(nums):
            for j in nums_dict[num]:
                result += 1 if (i * j) % k == 0 else 0
            
            nums_dict[num].append(i)
        
        return result