// 문자 반복 출력하기

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string, int n) {
        return Arrays.stream(my_string.split(""))
            .map(str -> str.repeat(n))
            .collect(Collectors.joining());
    }
}