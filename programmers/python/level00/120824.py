# 짝수 홀수 개수
def solution(num_list):
    even = 0
    odd = 0

    for num in num_list:
        if num % 2 == 0:
            even += 1
        else:
            odd += 1

    return [even, odd]

# 다른 풀이
# def solution(num_list):
#     div_num_list = list(map(lambda v: v % 2, num_list))
#     return [div_num_list.count(0), div_num_list.count(1)]