// 숨어있는 숫자의 덧셈 (1)

import java.util.Arrays;

class Solution {
    public int solution(String my_string) {
        return Arrays.stream(my_string
                             .replaceAll("[^0-9]", "")
                             .split(""))
                     .mapToInt(Integer::parseInt)
                     .sum();
    }
}