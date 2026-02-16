class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        result = 0

        for i in range(1, len(nums)):
            for j in range(0, i):
                if nums[i] == nums[j]:
                    result += 1
        
        return result
    
class Solution1:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        hash_map = {}
        result = 0

        for n in nums:
            if n in hash_map:
                result += hash_map[n]
                hash_map[n] += 1
            else:
                hash_map[n] = 1
        
        return result
    
from collections import defaultdict
    
class Solution2:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        hash_map = defaultdict(int)
        result = 0

        for n in nums:
            result += hash_map[n]
            hash_map[n] += 1
        
        return result