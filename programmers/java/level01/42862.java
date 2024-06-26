// 체육복

import java.util.Arrays;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] result = new int[n + 1];
        Arrays.fill(result, 1);
        
        for (int i = 0; i < lost.length; i++) {
            result[lost[i]] -= 1;
        }
        
        for (int i = 0; i < reserve.length; i++) {
            result[reserve[i]] += 1;
        }
        
        for (int i = 1; i <= n; i++) {
            if (result[i] == 0) {
                if (result[i - 1] == 2) {
                    result[i] = 1;
                    result[i - 1] = 1;
                } else if (i < n && result[i + 1] == 2) {
                    result[i] = 1;
                    result[i + 1] = 1;
                }
            }
        }
        
        return (int) Arrays.stream(result).filter(v -> 0 < v).count() - 1;
    }
}