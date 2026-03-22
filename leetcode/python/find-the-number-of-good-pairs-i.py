class Solution:
    def numberOfPairs(self, nums1: list[int], nums2: list[int], k: int) -> int:
        result = 0

        for n2 in nums2:
            for n1 in nums1:
                if n1 % (n2 * k) == 0:
                    result += 1
        
        return result