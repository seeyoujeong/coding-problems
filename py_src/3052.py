a = list()
#c = 0

for i in range(10):
    b = int(input())
    a.append(b%42)

a_set = set(a)
'''
for i in range(42):
    if i in a:
        c += 1
'''
print(len(a_set))

