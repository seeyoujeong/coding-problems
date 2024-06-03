// 예산

import java.util.Arrays;

class Solution {
    public int solution(int[] d, int budget) {
        int result = 0;
        Arrays.sort(d);
        
        for (int amount : d) {
            if (budget - amount < 0) {
                break;
            }
            
            budget -= amount;
            result++;
        }
        
        return result;
    }
}