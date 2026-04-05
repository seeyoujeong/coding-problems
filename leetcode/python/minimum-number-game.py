class Solution:
    def numberGame(self, nums: list[int]) -> list[int]:
        arr = []
        nums.sort(reverse=True)

        while nums:
            a = nums.pop()
            b = nums.pop()

            arr.extend([b, a])

        return arr