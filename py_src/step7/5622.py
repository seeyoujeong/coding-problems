a = input()
alp = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']

sum = 0
for i in alp:
    for j in i:
        for k in a:
            if j == k:
                sum += alp.index(i)+ 3

print(sum)