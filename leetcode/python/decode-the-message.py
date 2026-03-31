class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        table = {}
        n = 97

        for k in key.replace(" ", ""):
            if k not in table:
                table[k] = chr(n)
                n += 1
        
        return "".join([table[m] if m != " " else " " for m in message])