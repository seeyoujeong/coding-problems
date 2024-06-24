// 완주하지 못한 선수

import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> completionMap = new HashMap<>();
        
        for (String name : completion) {
            completionMap.put(
                name, 
                completionMap.getOrDefault(name, 0) + 1
            );
        }
        
        String result = "";
        
        for (String name : participant) {
            if (!completionMap.containsKey(name) ||
                completionMap.get(name) == 0) {
                result = name;
                break;
            } 
            
            completionMap.put(
                name,
                completionMap.get(name) - 1
            );
        }
        
        return result;
    }
}