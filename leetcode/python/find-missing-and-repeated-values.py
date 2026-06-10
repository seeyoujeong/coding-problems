class Solution1:
    def findMissingAndRepeatedValues(self, grid: list[list[int]]) -> list[int]:
        n = len(grid)
        flat_arr = [num for row in grid for num in row]
        repeated_set = set()
        missing_set = set(flat_arr)
        repeated_num = 0
        missing_num = 0

        for num in flat_arr:
            if num in repeated_set:
                repeated_num = num
                break
            
            repeated_set.add(num)

        for num in range(1, n * n + 1):
            if num not in missing_set:
                missing_num = num
                break
        
        return [repeated_num, missing_num]
    
class Solution2:
    def findMissingAndRepeatedValues(self, grid: list[list[int]]) -> list[int]:
        n = len(grid)
        freq = [0] * (n * n + 1)

        for row in grid:
            for num in row:
                freq[num] += 1

        repeated = missing = 0

        for num in range(1, n * n + 1):
            if freq[num] == 2:
                repeated = num
            elif freq[num] == 0:
                missing = num

        return [repeated, missing]