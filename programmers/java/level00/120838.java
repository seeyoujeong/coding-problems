// 모스부호 (1)

import java.util.HashMap;
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String solution(String letter) {
        HashMap<String, String> map = new HashMap<>(){{
            put(".-", "a");
            put("-...", "b");
            put("-.-.", "c");
            put("-..", "d");
            put(".", "e");
            put("..-.", "f");
            put("--.", "g");
            put("....", "h");
            put("..", "i");
            put(".---", "j");
            put("-.-", "k");
            put(".-..", "l");
            put("--", "m");
            put("-.", "n");
            put("---", "o");
            put(".--.", "p");
            put("--.-", "q");
            put(".-.", "r");
            put("...", "s");
            put("-", "t");
            put("..-", "u");
            put("...-", "v");
            put(".--", "w");
            put("-..-", "x");
            put("-.--", "y");
            put("--..", "z");
        }};
        
        return Arrays.stream(letter.split(" "))
            .map(l -> map.get(l))
            .collect(Collectors.joining());
    }
}