// 자연수 뒤집어 배열로 만들기

import java.util.Arrays;

class Solution {
    public int[] solution(long n) {
        return Arrays.stream(new StringBuilder(String.valueOf(n))
                             .reverse()
                             .toString()
                             .split(""))
            .mapToInt(Integer::parseInt)
            .toArray();
    }
}