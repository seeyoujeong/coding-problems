class Solution:
    def reverseByType(self, s: str) -> str:
        letter_stack = []
        special_stack = []

        for c in s:
            if c.isalpha():
                letter_stack.append(c)
            else:
                special_stack.append(c)
        
        result = ""

        for c in s:
            if c.isalpha():
                result += letter_stack.pop()
            else:
                result += special_stack.pop()
        
        return result