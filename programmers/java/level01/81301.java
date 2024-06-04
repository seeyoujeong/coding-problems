// 숫자 문자열과 영단어

class Solution {
    public int solution(String s) {
        String[] numbers = {"zero", "one", "two", "three", "four", 
                            "five", "six", "seven", "eight", "nine"};
        
        for (int i = 0; i <= 9; i++) {
            s = s.replaceAll(numbers[i], String.valueOf(i));
        }
        
        return Integer.parseInt(s);
    }
}