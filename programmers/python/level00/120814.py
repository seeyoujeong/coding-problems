# 피자 나눠 먹기 (1)
import math

def solution(n):
    return math.ceil(n / 7)

# 다른 풀이
def solution(n):
    return (n - 1) // 7 + 1