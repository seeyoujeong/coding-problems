class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        result = 0
        cur = 0

        for p in gain:
            cur += p
            result = max(result, cur)
        
        return result