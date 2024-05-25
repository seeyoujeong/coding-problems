// 특이한 정렬

import java.util.Arrays;

class Solution {
    public int[] solution(int[] numlist, int n) {
        return Arrays.stream(numlist)
            .boxed()
            .map(num -> new int[]{num, Math.abs(n - num)})
            .sorted((a, b) -> a[1] - b[1] == 0 ? b[0] - a[0] : a[1] - b[1])
            .mapToInt(arr -> arr[0])
            .toArray();
    }
}