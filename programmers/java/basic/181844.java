// 배열의 원소 삭제하기

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[] delete_list) {
        return Arrays.stream(arr)
            .filter(num -> !Arrays.stream(delete_list)
                    .anyMatch(v -> v == num))
            .toArray();
    }
}