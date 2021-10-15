n = int(input())
a = list(map(int, input().split()))

count = 0

for i in a:
    b = 0
    for j in range(2, i):
        if i%j == 0:
            b = 1
    if i == 1:
        continue        
    if b == 0:
        count += 1    

print(count)