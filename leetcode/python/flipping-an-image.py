class Solution:
    def flipAndInvertImage(self, image: list[list[int]]) -> list[list[int]]:
        result = []

        for row in image:
            result.append([1 if val == 0 else 0 for val in row[::-1]])

        return result