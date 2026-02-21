class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        greatest_num = max(candies)

        return [c_num + extraCandies >= greatest_num for c_num in candies]