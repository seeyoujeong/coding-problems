import math

class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        sum_odd = 0
        sum_even = 0

        for num in range(1, n*2+1):
            if num % 2 == 0:
                sum_even += num
            else:
                sum_odd += num
        
        return math.gcd(sum_odd, sum_even)