// 모의고사

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] answers) {
        int[][] spjArray = {
            {1, 2, 3, 4, 5}, 
            {2, 1, 2, 3, 2, 4, 2, 5}, 
            {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}
        };
        int[] spjAnswer = { 0, 0, 0 };
        int maxAnswer = 0;
        
        for (int i = 0; i < answers.length; i++) {
            for (int j = 0; j < 3; j++) {
                int[] spj = spjArray[j];
                spjAnswer[j] += spj[i % spj.length] == answers[i] ? 1 : 0;
                maxAnswer = Math.max(maxAnswer, spjAnswer[j]);
            }
        }
        
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < spjAnswer.length; i++) {
            if (spjAnswer[i] == maxAnswer) {
                result.add(i + 1);
            }
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}