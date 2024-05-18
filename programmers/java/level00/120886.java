// A로 B 만들기

import java.util.Arrays;

class Solution {
    public int solution(String before, String after) {
        String[] beforeArray = before.split("");
        String[] afterArray = after.split("");
        
        Arrays.sort(beforeArray);
        Arrays.sort(afterArray);
        
        return Arrays.equals(beforeArray, afterArray) ? 1 : 0;
    }
}