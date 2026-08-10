class Solution1:
    def makeSmallestPalindrome(self, s: str) -> str:
        result = ""
        n = len(s)

        for i in range(n):
            start = s[i]
            end = s[n - 1 - i]

            result += start if start < end else end
        
        return result

class Solution2:
    def makeSmallestPalindrome(self, s: str) -> str:
        s = list(s)
        i, j = 0, len(s) - 1

        while i < j:
            if s[i] < s[j]:
                s[j] = s[i]
            else:
                s[i] = s[j]
            i += 1
            j -= 1

        return ''.join(s)

class Solution3:
    def makeSmallestPalindrome(self, s: str) -> str:
        return "".join(min(a,b) for a, b in zip(s,s[::-1]))