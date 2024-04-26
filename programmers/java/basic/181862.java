// 세 개의 구분자

import java.util.Arrays;

class Solution {
    public String[] solution(String myStr) {
        String[] result = Arrays.stream(myStr.split("[abc]"))
            .filter(str -> !str.isEmpty())
            .toArray(String[]::new);
        
        return result.length == 0 ? new String[]{"EMPTY"} : result;
    }
}