class Solution:
    def countAsterisks(self, s: str) -> int:
        result = 0
        is_pair = False

        for c in s:
            if c == '|':
                is_pair = not is_pair
            elif c == '*' and not is_pair:
                result += 1
        
        return result