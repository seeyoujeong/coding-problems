// 순서쌍의 개수

import java.util.stream.IntStream;

class Solution {
    public int solution(int n) {
        return (int) IntStream.range(1, n + 1)
            .filter(num -> n % num == 0)
            .count();
    }
}