// 겹치는 선분의 길이

import java.util.HashMap;

class Solution {
    public int solution(int[][] lines) {
        HashMap<String, Integer> map = new HashMap<>();
        
        for (int[] line : lines) {
            for (int i = line[0]; i < line[1]; i++) {
                String key = i + "" + (i + 1);
            
                map.put(key, map.getOrDefault(key, 0) + 1);
            }
        }
        
        return (int) map.entrySet().stream()
            .filter(entry -> entry.getValue() > 1)
            .count();
    }
}