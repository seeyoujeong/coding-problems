class Solution:
    def uniqueMorseRepresentations(self, words: list[str]) -> int:
        result = set()
        morse_table = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

        for word in words:
            morse = "".join(morse_table[ord(c) - 97] for c in word)

            result.add(morse)

        return len(result)