// 컨트롤 제트

import java.util.Arrays;

class Solution {
    public int solution(String s) {
        String[] sArr = s.split(" ");
        int result = 0;
        
        for (int i = 0; i < sArr.length; i++) {
            if (sArr[i].equals("Z")) {
                result -= Integer.parseInt(sArr[i - 1]);
            } else {
                result += Integer.parseInt(sArr[i]);
            }
        }
        
        return result;
    }
}