class Solution:
    def balancedStringSplit(self, s: str) -> int:
        result = 0
        l_count = 0
        r_count = 0

        for c in s:
            if c == "L":
                l_count += 1
            else:
                r_count += 1
            
            if l_count == r_count:
                result += 1
                l_count = 0
                r_count = 0
        
        return result