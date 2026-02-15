class Solution:
    def subsetXORSum(self, nums: list[int]) -> int:
        result = []

        def add_XOR(idx, res) -> None:
            result.append(res)

            for i in range(idx, len(nums)):
                add_XOR(i + 1, res ^ nums[i])

        add_XOR(0, 0)
        
        return sum(result)