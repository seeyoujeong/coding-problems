class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = word.find(ch)
        prefix = "".join(reversed(word[:idx+1]))

        return prefix + word[idx+1:]
    
class Solution1:
    def reversePrefix(self, word: str, ch: str) -> str:
        i = word.find(ch)
        if i == -1:
            return word
        return word[:i+1][::-1] + word[i+1:]