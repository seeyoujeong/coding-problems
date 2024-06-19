// 대충 만든 자판

import java.util.ArrayList;

class Solution {
    int getKeymapCount(String[] keymap, char c) {
        int count = 101;
        
        for (String key : keymap) {
            int idx = key.indexOf(c);
            
            if (idx == -1) continue;
            
            count = Math.min(count, idx + 1);
        }
        
        return count == 101 ? -1 : count;
    }
    
    public int[] solution(String[] keymap, String[] targets) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (String target : targets) {
            int count = 0;
            
            for (char c : target.toCharArray()) {
                int temp = getKeymapCount(keymap, c);
                
                if (temp == -1) {
                    count = -1;
                    break;
                }
                
                count += temp;
            }
            
            result.add(count);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}