// 문자열 뒤집기

class Solution {
    public String solution(String my_string, int s, int e) {
        StringBuilder result = new StringBuilder();
        
        result.append(my_string.substring(0, s));
        result.append(new StringBuilder(my_string.substring(s, e + 1)).reverse().toString());
        result.append(my_string.substring(e + 1));
        
        return result.toString();
    }
}