// 조건에 맞게 수열 변환하기 2

import java.util.Arrays;

class Solution {
    int[] calcArray(int[] arr) {
        int[] result = arr.clone();
        
        for (int i = 0; i < result.length; i++) {
            if (result[i] >= 50 && result[i] % 2 == 0) {
                result[i] /= 2;
            } else if (result[i] < 50 && result[i] % 2 != 0) {
                result[i] = result[i] * 2 + 1;
            }
        }
        
        return result;
    }
    
    public int solution(int[] arr) {
        int count = 0;
        int[] currentArray = arr;
        int[] nextArray = calcArray(arr);
        
        while (!Arrays.equals(currentArray, nextArray)) {
            count += 1;
            currentArray = nextArray;
            nextArray = calcArray(nextArray);
        }
        
        return count;
    }
}