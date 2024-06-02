// 문자열 내림차순으로 배치하기

import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collectors;

class Solution {
    public String solution(String s) {
        return Arrays.stream(s.split(""))
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.joining());
    }
}