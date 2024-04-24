// x 사이의 개수

import java.util.Arrays;

class Solution {
    public int[] solution(String myString) {
        return Arrays.stream(myString.split("x", myString.length()))
            .mapToInt(str -> str.length())
            .toArray();
    }
}