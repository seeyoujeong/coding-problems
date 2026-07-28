class Solution:
    def numOfStrings(self, patterns: list[str], word: str) -> int:
        return len([p for p in patterns if p in word])