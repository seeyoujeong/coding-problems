# 진료순서 정하기
def solution(emergency):
    sortArr = sorted(list(emergency), reverse=True)
    return list(map(lambda num: sortArr.index(num) + 1, emergency))

# 다른 풀이
# def solution(emergency):
#     return [sorted(emergency, reverse=True).index(e) + 1 for e in emergency]