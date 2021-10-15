c = int(input())

for i in range(c):
    n = list(map(int, input().split()))
    avg = sum(n[1:])/n[0]
    count = 0
    for score in n[1:]:
        if score > avg:
            count += 1
    
    rate = count/n[0]*100
    print(f'{rate:0.3f}%')
    