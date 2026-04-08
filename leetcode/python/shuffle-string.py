class Solution:
    def restoreString(self, s: str, indices: list[int]) -> str:
        shuffled_list = [""] * len(s)

        for i, idx in enumerate(indices):
            shuffled_list[idx] = s[i]

        return "".join(shuffled_list)