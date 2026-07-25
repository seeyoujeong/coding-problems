class Solution1:
    def kthCharacter(self, k: int) -> str:
        word = "a"

        while len(word) <= k:
            temp = ""

            for c in word:
                temp += chr(ord(c) + 1) if c != 'z' else 'a'
            
            word += temp

        return word[k-1]

class Solution2:
    def kthCharacter(self, k: int, s = "a") -> str:
        return chr(97 + bin(k-1).count("1"))