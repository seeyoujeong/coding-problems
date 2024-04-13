// 접미사 배열

import java.util.ArrayList;
import java.util.Comparator;

class Solution {
    public String[] solution(String my_string) {
        ArrayList<String> result = new ArrayList<>();
        
        for (int i = 1; i <= my_string.length(); i++) {
            result.add(my_string.substring(my_string.length() - i));
        }
        
        result.sort(Comparator.naturalOrder());
        
        return result.toArray(String[]::new);
    }
}