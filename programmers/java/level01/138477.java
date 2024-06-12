// 명예의 전당 (1)

import java.util.PriorityQueue;
import java.util.Arrays;

class Solution {
    public int[] solution(int k, int[] score) {
        PriorityQueue<Integer> scoreList = new PriorityQueue<>();
        
        return Arrays.stream(score)
            .map(dayScore -> {
                scoreList.add(dayScore);
                
                if (scoreList.size() > k) {
                    scoreList.remove();
                }
                
                return scoreList.peek();
            })
            .toArray();
    }
}