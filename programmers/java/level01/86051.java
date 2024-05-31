// 없는 숫자 더하기

import java.util.Arrays;
import java.util.stream.IntStream;

class Solution {
    public int solution(int[] numbers) {
        return IntStream.range(0, 10)
            .filter(num -> Arrays.stream(numbers)
                            .noneMatch(i -> num == i))
            .sum();
    }
}