m = int(input())
n = int(input())
b = list()

for i in range(m, n+1):
    a = 0
    if i == 1:
        continue
    for j in range(2, i): 
        if i%j == 0:
            a = 1
            break
    if a == 0:
        b.append(i)

if sum(b) == 0:
    print(-1)
else:
    print(sum(b))
    print(b[0]) 