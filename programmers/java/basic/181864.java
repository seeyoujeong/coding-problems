// 문자열 바꿔서 찾기

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public int solution(String myString, String pat) {
        return Arrays.stream(myString.split(""))
            .map(str -> str.equals("A") ? "B" : "A")
            .collect(Collectors.joining())
            .contains(pat) ? 1 : 0;
    }
}