// 문자열 잘라서 정렬하기

import java.util.Arrays;

class Solution {
    public String[] solution(String myString) {
        return Arrays.stream(myString.split("x"))
            .filter(str -> !str.isBlank())
            .sorted()
            .toArray(String[]::new);
    }
}