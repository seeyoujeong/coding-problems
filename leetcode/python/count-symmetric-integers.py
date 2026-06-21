class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        result = 0

        for num in range(low, high + 1):
            str_num = str(num)
            num_len = len(str_num)

            if num_len % 2 == 0:
                mid = num_len // 2

                first_sum = sum(int(c) for c in str_num[:mid])
                last_sum = sum(int(c) for c in str_num[mid:])

                result += 1 if first_sum == last_sum else 0
        
        return result