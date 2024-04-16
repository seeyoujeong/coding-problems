// 2의 영역

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr) {
        int index = -1;
        int lastIndex = arr.length - 1;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 2) {
                index = i;
                break;
            }
        }
        
        if (index == -1) {
            int[] result = {-1};
            return result;
        }
        
        for (int i = lastIndex; i >= 0; i--) {
            if (arr[i] == 2) {
                lastIndex = i;
                break;
            }
        }
        
        return Arrays.copyOfRange(arr, index, lastIndex + 1);
    }
}