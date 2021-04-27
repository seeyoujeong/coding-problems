num = int(input())

for i in range(num):
    test_case = list(input())
    count = 0
    sum = 0
    for j in range(len(test_case)):
        if test_case[j] == 'O':
            count += 1
            sum += count
        else:
            count = 0
    
    print(sum)