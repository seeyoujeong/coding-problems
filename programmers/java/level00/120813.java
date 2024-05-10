// 짝수는 싫어요

import java.util.stream.IntStream;

class Solution {
    public int[] solution(int n) {
        return IntStream
            .range(0, n + 1)
            .filter(num -> num % 2 != 0)
            .toArray();
    }
}