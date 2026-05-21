class Solution:
    def sortSentence(self, s: str) -> str:
        s_arr = s.split()
        s_arr.sort(key=lambda w: w[-1])

        return " ".join([w[:-1] for w in s_arr])