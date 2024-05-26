// 연속된 수의 합

import java.util.stream.IntStream;

class Solution {
    public int[] solution(int num, int total) {
        int start = (int) Math.ceil(total / (double) num) - (int) Math.floor(num / 2);
        int end = (int) Math.floor(total / num) + (int) Math.floor(num / 2);
        
        return IntStream.rangeClosed(start, end).toArray();
    }
}