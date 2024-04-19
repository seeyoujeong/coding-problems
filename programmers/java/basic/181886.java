// 5명씩

import java.util.ArrayList;

class Solution {
    public String[] solution(String[] names) {
        ArrayList<String> result = new ArrayList<>();
        
        for (int i = 0; i < names.length; i += 5) {
            result.add(names[i]);
        }
        
        return result.toArray(String[]::new);
    }
}