# 문자 반복 출력하기
def solution(my_string, n):
    answer = ''

    for s in my_string:
        answer += s * n

    return answer


# 다른 풀이
# def solution(my_string, n):
#     return ''.join(i * n for i in my_string)