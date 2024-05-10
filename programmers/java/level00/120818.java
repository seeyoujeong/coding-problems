// 옷가게 할인 받기

class Solution {
    public int solution(int price) {
        if (price >= 500000) {
            price -= (int) price * 0.2;
        } else if (price >= 300000) {
            price -= (int) price * 0.1;
        } else if (price >= 100000) {
            price -= (int) price * 0.05;
        }
        
        return price;
    }
}