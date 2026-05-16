class Solution:
    def diagonalSum(self, mat: list[list[int]]) -> int:
        result = 0
        n = len(mat)

        for i in range(n):
            result += mat[i][i]

            if i != n - 1 - i:
                result += mat[n - 1 - i][i]
        
        return result