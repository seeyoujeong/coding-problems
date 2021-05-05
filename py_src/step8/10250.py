T = int(input())

for i in range(T):
    H, W, N = map(int, input().split())

    a = N // H + 1
    b = N % H
    if N % H == 0:
        a = N // H
        b = H

    print(f'{b*100+a}')

