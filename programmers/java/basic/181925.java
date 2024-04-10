// 수 조작하기 2

import java.util.HashMap;

class Solution {
    public String solution(int[] numLog) {
        String result = "";
        HashMap<Integer, String> map = new HashMap<>(){{
            put(1, "w");
            put(-1, "s");
            put(10, "d");
            put(-10, "a");
        }};
        
        for (int i = 1; i < numLog.length; i++) {
            result += map.get(numLog[i] - numLog[i - 1]);
        }
        
        return result;
    }
}