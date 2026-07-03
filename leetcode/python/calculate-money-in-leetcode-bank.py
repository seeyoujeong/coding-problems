class Solution:
    def totalMoney(self, n: int) -> int:
        result = 0
        monday = 0

        for i in range(n):
            if i % 7 == 0:
                monday += 1
            
            result += monday + i % 7
        
        return result