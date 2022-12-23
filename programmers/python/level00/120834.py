# 외계행성의 나이
def solution(age):
    pg986 = 'abcdefghij'
    return ''.join([pg986[int(i)] for i in str(age)])

# 다른 풀이
# def solution(age):
#     return ''.join([chr(ord('a')+int(i)) for i in str(age)])