class Solution:
    def countDigits(self, num: int) -> int:
        return len([n for n in list(map(int, str(num))) if num % n == 0])