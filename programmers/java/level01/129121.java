// 소수 찾기

import java.util.Arrays;

class Solution {
    public int solution(int n) {
        boolean[] isPrimeList = new boolean[n + 1];
        Arrays.fill(isPrimeList, true);
        int result = n - 1;
        
        for (int i = 2; i < Math.sqrt(n); i++) {
            if (!isPrimeList[i]) continue;
            
            for (int j = i; i * j <= n; j++) {
                if (isPrimeList[i * j]) result -= 1;
                isPrimeList[i * j] = false;
            }
        }
        
        return result;
    }
}