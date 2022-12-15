# 분수의 덧셈
def solution(denum1, num1, denum2, num2):
    resultNum = num1 * num2
    resultDenum = denum1 * num2 + denum2 * num1
    resultGcd = gcd(resultNum, resultDenum)

    return [resultDenum / resultGcd, resultNum / resultGcd]

def gcd(a, b):
    while b != 0:
        tmp = a
        a = b
        b = tmp % b

    return a

# 다른 풀이
# import math

# def solution(denum1, num1, denum2, num2):
#     denum = denum1 * num2 + denum2 * num1
#     num = num1 * num2
#     gcd = math.gcd(denum, num)
#     return [denum // gcd, num // gcd]

# from fractions import Fraction

# def solution(denum1, num1, denum2, num2):
#     answer = Fraction(denum1, num1) + Fraction(denum2, num2)
#     return [answer.numerator, answer.denominator]