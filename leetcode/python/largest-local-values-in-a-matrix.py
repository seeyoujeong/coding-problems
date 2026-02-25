class Solution:
    def largestLocal(self, grid: list[list[int]]) -> list[list[int]]:
        n = len(grid)
        result = []

        for i in range(n - 2):
            row = []

            for j in range(n - 2):
                max_n = 0

                for x in range(3):
                    for y in range(3):
                        max_n = max(max_n, grid[i + x][j + y])
                
                row.append(max_n)

            result.append(row)

        return result
        