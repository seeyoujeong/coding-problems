# 옷가게 할인 받기
def solution(price):
    answer = 0;
    
    if price >= 500000:
        answer = price - (price * 0.2)
    elif price >= 300000:
        answer = price - (price * 0.1)
    elif price >= 100000:
        answer = price - (price * 0.05)
    else:
        answer = price;
        
    return int(answer)

# 다른 풀이
# def solution(price):
#     discount_rates = {500000: 0.8, 300000: 0.9, 100000: 0.95, 0: 1}
#     for discount_price, discount_rate in discount_rates.items():
#         if price >= discount_price:
#             return int(price * discount_rate)