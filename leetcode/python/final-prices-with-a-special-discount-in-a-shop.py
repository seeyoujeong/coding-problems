class Solution:
    def finalPrices(self, prices: list[int]) -> list[int]:
        result = prices[:]
        n = len(prices)

        for i in range(n):
            for j in range(i+1, n):
                if prices[j] <= prices[i]:
                    result[i] -= prices[j]
                    break

        return result
    
class Solution1:
    def finalPrices(self, prices: list[int]) -> list[int]:
        stack = []
        result = prices[:]

        for i in range(len(prices)):
            while stack and prices[stack[-1]] >= prices[i]:
                prev_index = stack.pop()
                result[prev_index] -= prices[i] 
            stack.append(i)

        return result