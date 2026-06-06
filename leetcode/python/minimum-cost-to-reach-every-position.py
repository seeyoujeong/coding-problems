class Solution:
    def minCosts(self, cost: list[int]) -> list[int]:
        for i in range(1, len(cost)):
            if cost[i-1] < cost[i]:
                cost[i] = cost[i-1]
        
        return cost