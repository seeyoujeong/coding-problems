// 과일 장수

import java.util.stream.IntStream;

class Solution {
    public int solution(int k, int m, int[] score) {
        int[] sortedScore = IntStream.of(score)
            .boxed()
            .sorted((a, b) -> b - a)
            .mapToInt(v -> v)
            .toArray();
        
        return IntStream.range(0, score.length)
            .filter(idx -> (idx + 1) % m == 0)
            .map(idx -> sortedScore[idx] * m)
            .sum();
    }
}