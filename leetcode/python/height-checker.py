class Solution:
    def heightChecker(self, heights: list[int]) -> int:
        expected = sorted(heights)

        return len([h for i, h in enumerate(heights) if expected[i] != h])