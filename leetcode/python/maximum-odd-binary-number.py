class Solution1:
    def maximumOddBinaryNumber(self, s: str) -> str:
        count_one = 0
        count_zero = 0

        for c in s:
            if c == "1":
                count_one += 1
            elif c == "0":
                count_zero += 1
        
        return ("1" * (count_one - 1)) + ("0" * count_zero) + "1"

class Solution2:
    def maximumOddBinaryNumber(self, s: str) -> str:
        n = len(s)
        one = s.count('1')
        
        return '1' * (one - 1) + '0' * (n - one) + '1'