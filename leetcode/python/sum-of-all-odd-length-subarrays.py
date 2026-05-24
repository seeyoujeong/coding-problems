import math

class Solution:
    def sumOddlengthSubarrays(self, arr: list[int]) -> int:
        result = 0

        for i in range(len(arr)):
            total_subarrays = (i + 1) * (len(arr) - i)
            odd_subarrays = math.floor((total_subarrays + 1) / 2)

            result += odd_subarrays * arr[i]

        return result

class Solution1:
    def sumOddlengthSubarrays(self, arr: list[int]) -> int:
        total = 0
        n = len(arr)

        for i in range(n):
            left = i + 1
            right = n - i
            total += ((left * right + 1) // 2) * arr[i]
            
        return total