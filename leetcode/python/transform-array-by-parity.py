class Solution:
    def transformArray(self, nums: list[int]) -> list[int]:
        return sorted([0 if n % 2 == 0 else 1 for n in nums])
    
class Solution1:
    def transformArray(self, nums: list[int]) -> list[int]:
        transformed = [0 if n % 2 == 0 else 1 for n in nums]
        transformed.sort()

        return transformed
    
class Solution2:
    def transformArray(self, nums: list[int]) -> list[int]:
        cnt = [0, 0]

        for n in nums:
            cnt[n % 2] += 1

        return [0] * cnt[0] + [1] * cnt[1]