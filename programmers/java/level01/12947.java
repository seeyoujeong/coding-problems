// 하샤드의 수

import java.util.Arrays;

class Solution {
    public boolean solution(int x) {
        return x % Arrays.stream(String.valueOf(x).split(""))
            .mapToInt(Integer::parseInt)
            .sum() == 0;
    }
}