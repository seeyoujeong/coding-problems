class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> list[int]:
        result = []

        for i in range(left, right + 1):
            if Solution.isSDN(i):
                result.append(i)

        return result
    
    def isSDN(num: int) -> bool:
        origin = num

        while num >= 1:
            mod = num % 10

            if mod == 0 or origin % mod != 0:
                return False
            
            num = num // 10
        
        return True