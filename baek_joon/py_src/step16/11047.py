n, k = map(int, input().split())
a = []
count = 0

for i in range(n):
    p = int(input())
    a.append(p)

a.reverse()

for i in a:
    if k == 0:
        break
    if k >= i:
        count += k // i
        k %= i

print(count)