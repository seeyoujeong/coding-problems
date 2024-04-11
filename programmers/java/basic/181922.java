// 수열과 구간 쿼리 4

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] result = Arrays.copyOf(arr, arr.length);
        
        for (int[] query : queries) {
            int s = query[0];
            int e = query[1];
            int k = query[2];
            
            for (int i = s; i <= e; i++) {
                if (i % k == 0) {
                    result[i] += 1;
                } 
            }
        }
        
        return result;
    }
}