// 음양 더하기

import java.util.stream.IntStream;

class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        return IntStream.range(0, absolutes.length)
            .map(idx -> signs[idx] ? absolutes[idx] : -absolutes[idx])
            .sum();
    }
}