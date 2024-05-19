// 한 번만 등장한 문자

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String s) {
        return Arrays.stream(s.split(""))
            .filter(str -> s.indexOf(str) == s.lastIndexOf(str))
            .sorted()
            .collect(Collectors.joining());
    }
}