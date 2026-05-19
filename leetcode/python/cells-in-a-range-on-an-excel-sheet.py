class Solution:
    def cellsInRange(self, s: str) -> list[str]:
        c1 = s[0]
        r1 = s[1]
        c2 = s[3]
        r2 = s[4]
        result = []

        for col in range(ord(c1), ord(c2)+1):
            letter = chr(col)

            for row in range(int(r1), int(r2)+1):
                result.append(f"{letter}{row}")
            
        return result