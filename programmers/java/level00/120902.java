// 문자열 계산하기

class Solution {
    public int solution(String my_string) {
        int result = 0;
        int operator = 1;
        
        for (String val : my_string.split(" ")) {
            if (val.equals("+")) {
                operator = 1;
            } else if (val.equals("-")) {
                operator = -1;
            } else {
                result += Integer.parseInt(val) * operator;
            }
        }
        
        return result;
    }
}