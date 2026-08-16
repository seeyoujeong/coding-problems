class Solution:
    def diStringMatch(self, s: str) -> list[int]:
        result = []
        low = 0
        high = len(s)

        for flag in s:
            if flag == "I":
                result.append(low)
                low += 1
            else:
                result.append(high)
                high -= 1
        
        result.append(low)

        return result