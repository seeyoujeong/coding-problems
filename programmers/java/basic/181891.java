// 순서 바꾸기

import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] result = new int[num_list.length];
        int[] arr1 = Arrays.copyOfRange(num_list, n, num_list.length);
        int[] arr2 = Arrays.copyOfRange(num_list, 0, n);
        
        System.arraycopy(arr1, 0, result, 0, arr1.length);
        System.arraycopy(arr2, 0, result, arr1.length, arr2.length);
        
        return result;
    }
}