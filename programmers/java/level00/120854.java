// 배열 원소의 길이

import java.util.Arrays;

class Solution {
    public int[] solution(String[] strlist) {
        return Arrays.stream(strlist)
            .mapToInt(str -> str.length())
            .toArray();
    }
}