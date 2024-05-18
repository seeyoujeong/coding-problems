// 숨어있는 숫자의 덧셈 (2)

import java.util.Arrays;

class Solution {
    public int solution(String my_string) {
        return Arrays.stream(my_string.split("[A-Za-z]"))
            .filter(str -> str.length() > 0)
            .mapToInt(Integer::valueOf)
            .sum();
    }
}