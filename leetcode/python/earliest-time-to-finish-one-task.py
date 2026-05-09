class Solution:
    def earliestTime(self, tasks: list[list[int]]) -> int:
        return min([s + f for s, f in tasks])