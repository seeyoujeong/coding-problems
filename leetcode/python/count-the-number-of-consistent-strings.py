class Solution:
    def countConsistentStrings(self, allowed: str, words: list[str]) -> int:
        allowed_set = {c for c in allowed}
        result = 0

        for word in words:
            if all(c in allowed_set for c in word):
                result += 1

        return result

class Solution1:
    def countConsistentStrings(self, allowed: str, words: list[str]) -> int:
        allowed_set = set(allowed)
        result = 0

        for word in words:
            if set(word) <= allowed_set:
                result += 1

        return result

class Solution2:
    def countConsistentStrings(self, allowed: str, words: list[str]) -> int:
        allowed_set = set(allowed)
        result = 0

        for word in words:
            if allowed_set.issuperset(word):
                result += 1

        return result