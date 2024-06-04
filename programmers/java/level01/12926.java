// 시저 암호

import java.util.stream.Collectors;

class Solution {
    int encryption(int c, int n) {
        if ('a' <= c && c <= 'z') {
            return 'a' + (c - 'a' + n) % 26;
        } else if ('A' <= c && c <= 'Z') {
            return 'A' + (c - 'A' + n) % 26;
        } else {
            return c;
        }
    }
    
    public String solution(String s, int n) {
        return s.chars()
            .map(c -> encryption(c, n))
            .mapToObj(c -> String.valueOf((char) c))
            .collect(Collectors.joining());
    }
}