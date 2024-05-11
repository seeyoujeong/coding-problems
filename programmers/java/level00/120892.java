// 암호 해독

import java.util.stream.IntStream;
import java.util.stream.Collectors;

class Solution {
    public String solution(String cipher, int code) {
        return IntStream.range(0, cipher.length())
            .filter(idx -> (idx + 1) % code == 0)
            .mapToObj(idx -> String.valueOf(cipher.charAt(idx)))
            .collect(Collectors.joining());
    }
}