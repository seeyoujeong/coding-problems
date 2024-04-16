// 배열 조각하기

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[] query) {
        int[] result = arr;
        
        for (int i = 0; i < query.length; i++) {
            if (i % 2 == 0) {
                result = Arrays.copyOfRange(result, 0, query[i] + 1); 
            } else {
                result = Arrays.copyOfRange(result, query[i], result.length);
            }
        }
        
        return result;
    }
}