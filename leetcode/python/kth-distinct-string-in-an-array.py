class Solution:
    def kthDistinct(self, arr: list[str], k: int) -> str:
        count_dict = {}

        for s in arr:
            if s in count_dict:
                count_dict[s] += 1
            else:
                count_dict[s] = 1
        
        distinct = [s for s, n in count_dict.items() if n == 1]

        return "" if len(distinct) < k else distinct[k-1]

from collections import Counter

class Solution:
    def kthDistinct(self, arr: list[str], k: int) -> str:
        freq = Counter(arr)
        
        for s in arr:
            if freq[s] == 1:
                k -= 1
                if k == 0:
                    return s
        return ""