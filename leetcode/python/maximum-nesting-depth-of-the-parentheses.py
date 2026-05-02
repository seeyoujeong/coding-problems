class Solution:
    def maxDepth(self, s: str) -> int:
        result = 0
        cur = 0

        for c in s:
            if c == '(':
                cur += 1
                result = max(result, cur)
            elif c == ')':
                cur -= 1
        
        return result
        