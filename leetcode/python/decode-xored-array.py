class Solution:
    def decode(self, encoded: list[int], first: int) -> list[int]:
        result = [first]

        for n in encoded:
            temp = result[-1] ^ n
            result.append(temp)

        return result