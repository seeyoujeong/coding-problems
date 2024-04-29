// 배열 비교하기

import java.util.Arrays;

class Solution {
    public int solution(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            return arr1.length > arr2.length ? 1 : -1;
        }
        
        int arr1Sum = Arrays.stream(arr1).sum();
        int arr2Sum = Arrays.stream(arr2).sum();
        
        if (arr1Sum != arr2Sum) {
            return arr1Sum > arr2Sum ? 1 : -1;
        }
        
        return 0;
    }
}