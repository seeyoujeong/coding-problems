// 문자열 나누기

class Solution {
    public int solution(String s) {
        char char1 = ' ';
        int char1Count = 0;
        int char2Count = 0;
        int result = 0;
        
        for (char curChar : s.toCharArray()) {
            if (char1 == ' ') {
                char1 = curChar;
            }
            
            if (curChar == char1) {
                char1Count++;
            } else {
                char2Count++;
            }
            
            if (char1Count == char2Count) {
                char1 = ' ';
                char1Count = 0;
                char2Count = 0;
                result++;
            }
        }
        
        if (char1 != ' ') result++;
        
        return result;
    }
}