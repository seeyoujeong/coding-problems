// 두 정수 사이의 합

import java.util.stream.LongStream;

class Solution {
    public long solution(int a, int b) {
        int maxNum = Math.max(a, b);
        int minNum = Math.min(a, b);
        return LongStream.range(minNum, maxNum + 1).sum();
    }
}