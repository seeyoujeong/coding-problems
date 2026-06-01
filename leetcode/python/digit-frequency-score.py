from collections import defaultdict

class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        digits_dict = defaultdict(int)

        for d in [int(c) for c in str(n)]:
            digits_dict[d] += 1
        
        return sum(k * v for k, v in digits_dict.items())