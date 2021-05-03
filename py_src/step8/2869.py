import math

a, b, v = map(int, input().split())

crawl = math.ceil((v-b) / (a-b))

print(crawl)
    
