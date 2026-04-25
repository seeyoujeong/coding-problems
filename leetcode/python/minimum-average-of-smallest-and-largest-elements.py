from collections import deque

class Solution:
    def minimumAverage(self, nums: list[int]) -> float:
        result = 51
        nums.sort()
        nums_q = deque(nums)

        while nums_q:
            min_el = nums_q.popleft()
            max_el = nums_q.pop()

            result = min(result, (min_el + max_el) / 2)

        return result