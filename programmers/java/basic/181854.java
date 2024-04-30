// 배열의 길이에 따라 다른 연산하기

import java.util.Arrays;

class Solution {
    boolean isEven(int num) {
        return num % 2 == 0;
    }
    
    public int[] solution(int[] arr, int n) {
        int[] result = Arrays.copyOf(arr, arr.length);
        boolean evenLength = isEven(result.length);
        
        for (int i = 0; i < result.length; i++) {
            boolean evenIndex = isEven(i);
            
            if ((evenLength && !evenIndex) || 
                (!evenLength && evenIndex)) {
                result[i] += n;
            }
        }
        
        return result;
    }
}