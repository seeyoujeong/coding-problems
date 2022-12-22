# 각도기
def solution(angle):
    if angle == 180:
        return 4
    elif 180 > angle > 90:
        return 3
    elif angle == 90:
        return 2
    elif 90 > angle > 0:
        return 1

# 다른 풀이
# def solution(angle):
#     return (angle // 90) * 2 + (angle % 90 > 0) * 1