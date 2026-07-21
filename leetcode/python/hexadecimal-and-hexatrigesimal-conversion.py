class Solution:
    def concatHex36(self, n: int) -> str:
        return f"{n**2:X}" + Solution.to_base36(n**3)
    
    @staticmethod
    def to_base36(n: int) -> str:
        chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if n == 0:
            return "0"

        result = ""

        while n > 0:
            n, remainder = divmod(n, 36)
            result = chars[remainder] + result 
        
        return result