# 하샤드 수

def solution(x):
    answer = True
    numList = list(map(int, str(x)))

    if x % sum(numList) == 0:
        answer = True
    else:
        answer = False

    return answer
  
# 다른 풀이
# def solution(n):
#     return n % sum([int(c) for c in str(n)]) == 0