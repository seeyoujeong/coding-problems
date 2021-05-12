while True:
    num = list(map(int, input().split()))

    if sum(num) == 0:
        break

    z = max(num)
    num.remove(z)

    if num[0]**2 + num[1]**2 == z**2:
        print('right')
    else:
        print('wrong')