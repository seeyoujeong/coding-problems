// n의 배수 고르기

import java.util.Arrays;

class Solution {
    public int[] solution(int n, int[] numlist) {
        return Arrays.stream(numlist)
            .filter(num -> num % n == 0)
            .toArray();
    }
}