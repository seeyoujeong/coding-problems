// 조건에 맞게 수열 변환하기 3

import java.util.Arrays;
import java.util.function.IntUnaryOperator;

class Solution {
    int[] convert(int[] arr, int k, IntUnaryOperator func) {
        return Arrays.stream(arr).map(func).toArray();
    }
    
    public int[] solution(int[] arr, int k) {
        return k % 2 == 0 ?
            convert(arr, k, num -> num + k) :
            convert(arr, k, num -> num * k);
    }
}