lecture = int(input())
score = list(map(int, input().split()))
sum = 0
high = max(score)

for i in range(lecture):
    score[i] = score[i]/high*100
    sum += score[i]

print(sum/lecture)