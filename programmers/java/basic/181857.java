// 배열의 길이를 2의 거듭제곱으로 만들기

import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr) {
        int len = (int) Math.pow(2, 
            Math.ceil(Math.log(arr.length) / Math.log(2)));
        return Arrays.copyOf(arr, len);
    }
}