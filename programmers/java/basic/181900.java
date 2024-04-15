// 글자 지우기

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public String solution(String my_string, int[] indices) {
        List<Integer> indexList = Arrays.stream(indices).boxed().collect(Collectors.toList());
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < my_string.length(); i++) {
            if (!indexList.contains(i)) {
                result.append(my_string.charAt(i));
            }
        }
        
        return result.toString();
    }
}