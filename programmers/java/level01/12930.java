// 이상한 문자 만들기

import java.util.ArrayList;
import java.util.stream.Collectors;

class Solution {
    public String solution(String s) {
        ArrayList<String> result = new ArrayList<>();
        String[] words = s.split(" ", -1);
        
        for (String word : words) {
            String[] strings = word.split("");
            StringBuilder sb = new StringBuilder();
            
            for (int i = 0; i < strings.length; i++) {
                if (i % 2 == 0) {
                    sb.append(strings[i].toUpperCase());
                } else {
                    sb.append(strings[i].toLowerCase());
                }
            }
            
            result.add(sb.toString());
        }
        
        return result.stream().collect(Collectors.joining(" "));
    }
}