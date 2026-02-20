class Solution:
    def reverseDegree(self, s: str) -> int:
        rev_alp = lambda a: 123 - ord(a)

        return sum(rev_alp(c) * i for i, c in enumerate(s, start=1))