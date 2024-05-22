// 외계어 사전

class Solution {
    public int solution(String[] spell, String[] dic) {
        int count = 0;
        
        for (String word : dic) {
            boolean flag = true;
            
            for (String s : spell) {
                if (!word.contains(s) || 
                    word.indexOf(s) != word.lastIndexOf(s)) {
                    flag = false;
                }
            }
            
            if (flag) count++;
        }
        
        return count > 0 ? 1 : 2;
    }
}