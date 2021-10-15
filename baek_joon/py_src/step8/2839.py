sugar = int(input())

pocket = 0
while sugar >= 0:
    if sugar % 5 == 0: 
        pocket += (sugar // 5) 
        print(pocket)
        break
    sugar -= 3  
    pocket += 1
else:
    print(-1)
