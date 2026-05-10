class Solution:
    def maximum69Number (self, num: int) -> int:
        result = ""

        for i, c in enumerate(str(num)):
            if c == '6':
                result += '9'
                result += str(num)[i+1:]
                break
            else:
                result += c
        
        return int(result)
    
class Solution1:
    def maximum69Number (self, num: int) -> int:
        return int(str(num).replace('6', '9', 1))