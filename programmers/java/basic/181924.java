// 수열과 구간 쿼리 3

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] result = Arrays.copyOf(arr, arr.length);
        
        for (int[] query : queries) {
            int idx1 = query[0];
            int idx2 = query[1];
            
            int temp = result[idx1];
            result[idx1] = result[idx2];
            result[idx2] = temp;
        }
        
        return result;
    }
}