n = int(input())
x = list(map(int, input().split()))

xs = sorted(list(set(x)))
xs = {xs[i] : i for i in range(len(xs))}

print(*[xs[i] for i in x])


