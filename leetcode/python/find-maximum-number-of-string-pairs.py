class Solution:
    def maximumNumberOfStringPairs(self, words: list[str]) -> int:
        result = 0
        word_set = set()

        for word in words:
            if word[::-1] in word_set:
                result += 1
            
            word_set.add(word)
        
        return result