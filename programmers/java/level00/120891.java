// 369게임

import java.util.Arrays;

class Solution {
    public int solution(int order) {
        return (int) Arrays.stream(String.valueOf(order).split(""))
            .filter(num -> num.equals("3") || 
                           num.equals("6") || 
                           num.equals("9"))
            .count();
    }
}