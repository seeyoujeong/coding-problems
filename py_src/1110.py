N = int(input())
c = N
NN = 0
t = 0
s = 0

while True:
    t = N//10 + N%10
    NN = (N%10)*10 + t%10
    s+=1

    N = NN

    if NN == c:
        break
print(s)