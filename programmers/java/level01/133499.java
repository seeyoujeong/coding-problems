// 옹알이 (2)

import java.util.Arrays;

class Solution {
    boolean isPronounce(String babble) {
        String[] pronunciationList = {"aya", "ye", "woo", "ma"};
        
        for (String pronunciation : pronunciationList) {
            if (babble.contains(pronunciation.repeat(2))) {
                return false;
            }
            
            babble = babble.replaceAll(pronunciation, "F");
        }
        
        return babble.replaceAll("F", "").length() == 0;
    }
    public int solution(String[] babbling) {
        return (int) Arrays.stream(babbling)
            .filter(babble -> isPronounce(babble))
            .count();
    }
}