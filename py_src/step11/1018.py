n,m = map(int, input().split())
board = list()

for _ in range(n):
    board.append(input())

count = 8*8
for i in range(n):
    if n-i >= 8:
        for j in range(m):
            check1 = 0
            check2 = 0
            if m-j >= 8:
                wrong = 0
                for x in range(i, i+8):
                    for y in range(j, j+8):
                        if wrong%2 == 0:
                            if board[x][y] != 'W':
                                check1 += 1
                            if board[x][y] != 'B':
                                check2 += 1
                        else:
                            if board[x][y] != 'B':
                                check1 += 1
                            if board[x][y] != 'W':
                                check2 += 1
                        wrong += 1
                    wrong += 1   
                count = min(count,check1,check2)
print(count)

        