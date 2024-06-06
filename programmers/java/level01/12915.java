// 문자열 내 마음대로 정렬하기

import java.util.Arrays;

class Solution {
    public String[] solution(String[] strings, int n) {
        Arrays.sort(strings, (a, b) -> {
            if (a.charAt(n) == b.charAt(n)) {
                return a.compareTo(b);
            } else {
                return a.charAt(n) - b.charAt(n);
            }
        });
        
        return strings;
    }
}