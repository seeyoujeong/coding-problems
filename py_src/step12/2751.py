import sys

n = int(sys.stdin.readline())
n_list = list()

for _ in range(n):
    a = int(sys.stdin.readline())
    n_list.append(a)

for i in sorted(n_list):
    sys.stdout.write(str(i)+'\n')