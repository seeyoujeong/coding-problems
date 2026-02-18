from collections import defaultdict, Counter

class Solution:
    def maxFreqSum(self, s: str) -> int:
        vowels = defaultdict(int)
        consonants = defaultdict(int)

        for c in s:
            if c in ['a', 'e', 'i', 'o', 'u']:
                vowels[c] += 1
            else:
                consonants[c] += 1
        
        max_vowels_count = max(vowels.values()) if vowels else 0
        max_consonants_count = max(consonants.values()) if consonants else 0
        
        return max_vowels_count + max_consonants_count

class Solution1:
    def maxFreqSum(self, s: str) -> int:
        vowels = defaultdict(int)
        consonants = defaultdict(int)
        max_v = 0
        max_c = 0

        for c in s:
            if c in "aeiou":
                vowels[c] += 1
                max_v = max(max_v, vowels[c])
            else:
                consonants[c] += 1
                max_c = max(max_c, consonants[c])
        
        return max_v + max_c
    
class Solution2:
    def maxFreqSum(self, s: str) -> int:
        counter = Counter(s)
        max_v = max((counter[c] for c in "aeiou"), default=0)
        max_c = max((v for c, v in counter.items() if c not in "aeiou"), default=0)

        return max_v + max_c