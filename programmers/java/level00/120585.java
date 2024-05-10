// 머쓱이보다 키 큰 사람

import java.util.Arrays;

class Solution {
    public int solution(int[] array, int height) {
        return Arrays.stream(array)
            .filter(num -> num > height)
            .toArray()
            .length;
    }
}