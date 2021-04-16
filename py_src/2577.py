a = int(input())
b = int(input())
c = int(input())

d = a*b*c

l = list(str(d))

for i in range(10):
    print(l.count(str(i)))

