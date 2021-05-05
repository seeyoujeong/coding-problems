t = int(input())

for i in range(t):
    k = int(input())
    n = int(input())

    k0 = [j for j in range(1, n+1)]

    print(k0)

    for a in range(k): 
        for b in range(1, n): 
            k0[b] += k0[b-1] 

    print(k0[-1])