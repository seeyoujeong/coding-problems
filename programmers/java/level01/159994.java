// 카드 뭉치

import java.util.Arrays;
import java.util.Queue;
import java.util.LinkedList;

class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        Queue<String> cards1List = new LinkedList<>(Arrays.asList(cards1));
        Queue<String> cards2List = new LinkedList<>(Arrays.asList(cards2));
        
        for (String word : goal) {
            if (!word.equals(cards1List.peek()) 
                && !word.equals(cards2List.peek())) {
                return "No";
            }
            
            if (word.equals(cards1List.peek())) {
                cards1List.remove();
            }
                
            if (word.equals(cards2List.peek())) {
                cards2List.remove();
            }
        }
        
        return "Yes";
    }
}