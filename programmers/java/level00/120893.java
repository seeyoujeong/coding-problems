// 대문자와 소문자

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string) {
        return Arrays.stream(my_string.split(""))
            .map(str -> str.equals(str.toUpperCase()) ? 
                    str.toLowerCase() : 
                    str.toUpperCase())
            .collect(Collectors.joining());
    }
}