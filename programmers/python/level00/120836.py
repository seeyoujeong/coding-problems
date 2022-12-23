# 순서쌍의 개수
def solution(n):
    answer = 0
    sqrtN = n ** (1 / 2)

    for i in range(1, int(sqrtN) + 1):
        if n % i == 0:
            answer += 2

    return answer - 1 if int(sqrtN) == sqrtN else answer

# 다른 풀이
# def solution(n):
#     return len(list(filter(lambda v: n % (v+1) == 0, range(n))))