'''x0, y0 = map(int, input().split())
x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())

if x0 == x1:
    x3 = x2
elif x0 == x2:
    x3 = x1
else:
    x3 = x0

if y0 == y1:
    y3 = y2
elif y0 == y2:
    y3 = y1
else:
    y3 = y0'''

x_list = []
y_list = []

for _ in range(3):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)

for i in range(3):
    if x_list.count(x_list[i]) == 1:
        x3 = x_list[i]
    if y_list.count(y_list[i]) == 1:
        y3 = y_list[i]

print(x3, y3)