n = int(input())
word = list()

for _ in range(n):
    word.append(input())

word = list(set(word))
word.sort(key = lambda x : (len(x), x))

print("\n".join(word))