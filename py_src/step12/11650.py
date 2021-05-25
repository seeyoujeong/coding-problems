import sys

n = int(sys.stdin.readline())
array = list()

for _ in range(n):
    x, y = map(int, sys.stdin.readline().split())
    array.append((x,y))

array.sort()   
array.sort(key = lambda x : x[0])

for i in array:
    print(*i)