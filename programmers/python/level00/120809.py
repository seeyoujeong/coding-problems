# 배열 두 배 만들기
def solution(numbers):
    return list(map(lambda num: num * 2, numbers))

# 다른 풀이
# def solution(numbers):
#     return [num * 2 for num in numbers]