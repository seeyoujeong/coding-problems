class Solution1:
    def isAcronym(self, words: list[str], s: str) -> bool:
        if len(words) != len(s):
            return False
        
        for i in range(len(words)):
            if s[i] != words[i][0]:
                return False
        
        return True
    
class Solution2:
    def isAcronym(self, words: list[str], s: str) -> bool:
        return ''.join(word[0] for word in words) == s