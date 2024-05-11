// 가위 바위 보

import java.util.HashMap;
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String rsp) {
        HashMap<String, String> map = new HashMap<>(){{
            put("2", "0");
            put("0", "5");
            put("5", "2");
        }};
        
        return Arrays.stream(rsp.split(""))
            .map(val -> map.get(val))
            .collect(Collectors.joining());
    }
}