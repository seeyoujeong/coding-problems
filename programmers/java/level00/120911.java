// 문자열 정렬하기 (2)

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string) {
        return Arrays.stream(my_string.toLowerCase().split(""))
            .sorted()
            .collect(Collectors.joining());
    }
}