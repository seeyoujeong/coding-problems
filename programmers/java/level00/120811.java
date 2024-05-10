// 중앙값 구하기

import java.util.Arrays;

class Solution {
    public int solution(int[] array) {
        int middleIdx = array.length / 2;
        Arrays.sort(array);
        
        return array[middleIdx];
    }
}