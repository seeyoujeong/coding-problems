S = input()
a_list = []

for i in range(97, 123):
    check = S.find(chr(i))
    a_list.append(check)  

for i in range(len(a_list)):
    print(a_list[i], end=' ')
    