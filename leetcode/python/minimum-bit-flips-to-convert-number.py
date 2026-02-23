class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        return f"{start ^ goal:b}".count("1")