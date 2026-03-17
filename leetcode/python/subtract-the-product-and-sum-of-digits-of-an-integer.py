class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        product_of_digits = 1
        sum_of_digits = 0

        for c in str(n):
            num = int(c)
            product_of_digits *= num
            sum_of_digits += num
        
        return product_of_digits - sum_of_digits