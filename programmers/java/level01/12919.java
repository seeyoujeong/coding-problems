// 서울에서 김서방 찾기

import java.util.Arrays;

class Solution {
    public String solution(String[] seoul) {
        return "김서방은 " 
            + Arrays.asList(seoul).indexOf("Kim")
            + "에 있다";
    }
}