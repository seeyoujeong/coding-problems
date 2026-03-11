class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        result = ""
        cnt = 0

        for p in s:
            if p == "(":
                if cnt > 0:
                    result += p
                
                cnt += 1
            else:
                cnt -= 1

                if cnt > 0:
                    result += p
        
        return result