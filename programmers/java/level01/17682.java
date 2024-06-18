// [1차] 다트 게임

class Solution {
    public int solution(String dartResult) {
        int result = 0;
        int prevScore = 0;
        int currentScore = 0;
        String temp = "";
        
        for (int i = 0; i < dartResult.length(); i++) {
            char value = dartResult.charAt(i);
            
            if (value == 'S' || value == 'D' || value == 'T') {
                prevScore = currentScore;
                currentScore = Integer.parseInt(temp);
                
                if (value == 'D') currentScore *= currentScore;
                else if (value == 'T') currentScore *= currentScore * currentScore;
                
                result += currentScore;
                temp = "";
            } else if (value == '#') {
                currentScore = -currentScore;
                result += currentScore * 2;
            } else if (value == '*') {
                result += currentScore + prevScore;
                currentScore = currentScore * 2;
            } else {
                temp += value;
            }
        }
        
        
        return result;
    }
}