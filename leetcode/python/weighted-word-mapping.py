class Solution:
    def mapWordWeights(self, words: list[str], weights: list[int]) -> str:
        result = ""

        for word in words:
            w_sum = 0

            for c in word:
                i = ord(c) - 97
                w_sum += weights[i]

            result += chr(26 - w_sum % 26 + 96)

        return result