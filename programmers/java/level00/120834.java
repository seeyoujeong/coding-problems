// 외계행성의 나이

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(int age) {
        String[] pgAge = {"a", "b", "c", "d", "e", 
                          "f", "g", "h", "i", "j"};
        
        return Arrays.stream(String.valueOf(age).split(""))
            .map(num -> pgAge[Integer.valueOf(num)])
            .collect(Collectors.joining());
    }
}