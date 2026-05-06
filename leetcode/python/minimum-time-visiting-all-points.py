class Solution:
    def minTimeToVisitAllPoints(self, points: list[list[int]]) -> int:
        result = 0

        for i in range(len(points) - 1):
            cur_x, cur_y = points[i]
            next_x, next_y = points[i + 1]

            result += max(abs(next_x - cur_x), abs(next_y - cur_y))

        return result