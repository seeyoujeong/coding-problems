import sys
from collections import Counter

n = int(sys.stdin.readline())
num_list = list()

for _ in range(n):
    num = int(sys.stdin.readline())
    num_list.append(num)

num_list.sort()

print(round(sum(num_list)/n))
print(num_list[n//2])

count = Counter(num_list).most_common() 
if len(count) > 1 and count[0][1] == count[1][1]:
    print(count[1][0])
else:
    print(count[0][0])

print(max(num_list)-min(num_list))