n = int(input())
n_list = list()

for _ in range(n):
    a = int(input())
    n_list.append(a)

n_list.sort()

for i in range(len(n_list)):
    print(n_list[i])