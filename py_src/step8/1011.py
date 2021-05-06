t = int(input())

for i in range(t):
    x, y = map(int, input().split())
    a = y - x
    count = 0
    b = 1
    c = 0
    while c < a:
        count += 1
        c += b
        if count %2 == 0:
            b += 1
            
    print(count)