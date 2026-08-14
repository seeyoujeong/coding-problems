class Solution:
    def findDifference(self, nums1: list[int], nums2: list[int]) -> list[list[int]]:
        set1 = set(nums1)
        set2 = set(nums2)

        for num in nums1:
            if num in set2:
                set2.discard(num)
        
        for num in nums2:
            if num in set1:
                set1.discard(num)
            
        return [[*set1], [*set2]]