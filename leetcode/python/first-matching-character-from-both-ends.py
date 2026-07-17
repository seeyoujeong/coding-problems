class Solution1:
    def firstMatchingIndex(self, s: str) -> int:
        n = len(s)

        for i in range(n):
            if s[i] == s[n - i - 1]:
                return i
        
        return -1

class Solution2:
    def firstMatchingIndex(self, s: str) -> int:
        l=0
        r=len(s)-1

        while l<=r:
            if s[l]==s[r]:
                return l
            
            l+=1
            r-=1

        return -1