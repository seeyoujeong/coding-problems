// 세로 읽기

import java.util.ArrayList;

class Solution {
    public String solution(String my_string, int m, int c) {
        ArrayList<String[]> table = new ArrayList<>();
        
        for (int i = 0; i < my_string.length(); i += m) {
            table.add(my_string.substring(i, i + m).split(""));
        }
        
        StringBuilder result = new StringBuilder();
        
        for (String[] row : table) {
            result.append(row[c - 1]);
        }
        
        return result.toString();
    }
}