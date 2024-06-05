// 푸드 파이트 대회

class Solution {
    public String solution(int[] food) {
        StringBuilder order = new StringBuilder();
        
        for (int i = 1; i < food.length; i++) {
            order.append(String.valueOf(i)
                            .repeat(food[i] / 2));
        }
        
        return order.toString() + "0" + order.reverse().toString();
    }
}