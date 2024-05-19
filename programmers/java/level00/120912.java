// 7의 개수

import java.util.Arrays;

class Solution {
    int countSeven(int num) {
        int result = 0;
        
        for (String strNum : String.valueOf(num).split("")) {
            if (strNum.equals("7")) result++;
        }
        
        return result;
    }
    
    public int solution(int[] array) {
        return Arrays.stream(array)
            .map(num -> countSeven(num))
            .sum();
    }
}