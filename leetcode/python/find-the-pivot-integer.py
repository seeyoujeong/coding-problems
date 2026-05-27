class Solution:
    def pivotInteger(self, n: int) -> int:
        left = 0
        right = n * (n + 1) / 2

        for i in range(1, n+1):
            left += i

            if left == right:
                return i
            
            right -= i
        
        return -1