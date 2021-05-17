n = int(input())
min_n = 0

for i in range(1, n+1):
    a = list(map(int, str(i)))
    b = i + sum(a)
    if b == n:
        min_n = i
        break
    
print(min_n)
