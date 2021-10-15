n = int(input())

line = 0
max_n = 0

while n > max_n:
    line += 1
    max_n += line

gap = max_n - n

if line % 2 == 0:
    num = line - gap
    den = gap + 1
else:
    num = gap + 1
    den = line - gap

print(f'{num}/{den}')

