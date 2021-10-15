def squre(x, y):
    return (x//3)*3 + y//3

def dfs(n):
    if n == 81:
        for i in B:
            print(' '.join(map(str, i)))
        return True
    x = n // 9
    y = n % 9
    if B[x][y] != 0:
        return dfs(n+1)
    else:
        for i in range(1, 10):
            if c1[x][i] == False and c2[y][i] == False and c3[squre(x, y)][i] == False:
                c1[x][i] = c2[y][i] = c3[squre(x, y)][i] = True
                B[x][y] = i
                if dfs(n+1):
                    return True
                B[x][y] = 0
                c1[x][i] = c2[y][i] = c3[squre(x, y)][i] = False
    return False

B = [list(map(int, input().split())) for _ in range(9)]
c1 = [[False]*10 for _ in range(9)]
c2 = [[False]*10 for _ in range(9)]
c3 = [[False]*10 for _ in range(9)]
for i in range(9):
    for j in range(9):
        if B[i][j] != 0:
            c1[i][B[i][j]] = True
            c2[j][B[i][j]] = True
            c3[squre(i, j)][B[i][j]] = True
dfs(0)