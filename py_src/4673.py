n_num = set(range(1, 10001))
g_num = set()

for i in range(1, 10001):
    for j in str(i):
        i += int(j)
    g_num.add(i)

self_num = sorted(n_num - g_num)
for i in self_num:
    print(i)