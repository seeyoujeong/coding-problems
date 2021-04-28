T = int(input())

for i in range(T):
    a, b = map(str, input().split())
    P = []

    for j in range(len(b)):
        P.append(b[j]*int(a))
    
    for k in range(len(P)):
        print(P[k], end='')
    print()

