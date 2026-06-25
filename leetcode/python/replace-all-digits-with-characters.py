class Solution:
    def replaceDigits(self, s: str) -> str:
        result = ""

        for i, c in enumerate(s):
            if i % 2 != 0:
                result += self.shift(s[i-1], int(s[i]))
            else:
                result += c
        
        return result

    def shift(self, c: str, i: int) -> str:
        code = ord(c)

        return chr(code + i)