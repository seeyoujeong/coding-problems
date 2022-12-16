# 최빈값 구하기
def solution(array):
    count = {}
    for num in set(array):
        count[num] = array.count(num)

    count = sorted(count.items(), key=lambda num: num[1], reverse=True)

    if len(count) == 1:
        return count[0][0]
    else:
        return count[0][0] if count[0][1] != count[1][1] else -1

# 다른 풀이
# def solution(array):
#     while len(array) != 0:
#         for i, a in enumerate(set(array)):
#             array.remove(a)
#         if i == 0: return a
#     return -1

# from collections import Counter

# def solution(array):
#     cnt = Counter(array).items()
#     li = sorted(cnt, key=lambda x: -x[1])
#     if len(li) == 1:
#         return li[0][0]
#     return li[0][0] if li[0][1] != li[1][1] else -1