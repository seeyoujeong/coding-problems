class Solution1:
    def sortByBits(self, arr: list[int]) -> list[int]:
        nums_and_bits = []

        for num in arr:
            nums_and_bits.append((num.bit_count(), num))

        nums_and_bits.sort()

        return [num for _, num in nums_and_bits]

class Solution2:
    def sortByBits(self, arr: list[int]) -> list[int]:
        return sorted(arr, key=lambda num: (num.bit_count(), num))