// 옹알이 (1)

class Solution {
    public int solution(String[] babbling) {
        int result = 0;
        String[] wordArr = {"aya", "ye", "woo", "ma"};
        
        for (String babble : babbling) {
            for (String word : wordArr) {
                babble = babble.replace(word, " ");
            }
            
            if (babble.trim().length() == 0) result++;
        }
        
        return result;
    }
}