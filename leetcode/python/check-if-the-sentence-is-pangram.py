import string

class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        result = True

        for alpha in string.ascii_lowercase:
            if alpha not in sentence:
                result = False
        
        return result

class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return all(alpha in sentence for alpha in string.ascii_lowercase)
    
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26