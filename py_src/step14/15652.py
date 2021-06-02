n, m = map(int, input().split())
s = list()

def f(x):
    if len(s) == m:
        print(' '.join(map(str, s)))
        return

    for i in range(x, n+1):
        s.append(i)
        f(i)
        s.pop()

f(1)