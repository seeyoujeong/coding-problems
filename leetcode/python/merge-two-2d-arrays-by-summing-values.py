class Solution:
    def mergeArrays(self, nums1: list[list[int]], nums2: list[list[int]]) -> list[list[int]]:
        num_dict = {}

        for i, v in [*nums1, *nums2]:
            num_dict[i] = num_dict.get(i, 0) + v

        arr = sorted(num_dict.items(), key=lambda x: x[0])

        return [[i, v] for i, v in arr]