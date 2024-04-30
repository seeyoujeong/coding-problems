// 문자열 묶기

import java.util.Arrays;

class Solution {
    public int solution(String[] strArr) {
        int[] countArr = new int[31];
        
        for (String str : strArr) {
            countArr[str.length()] += 1;
        }
        
        Arrays.sort(countArr);
        
        return countArr[countArr.length - 1];
    }
}