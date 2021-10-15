n = input()
n_list = list()

for i in range(len(n)):
    n_list.append(int(n[i]))

n_list.sort()
n_list.reverse()
a = str()

for i in n_list:
    a += str(i)

print(int(a))


