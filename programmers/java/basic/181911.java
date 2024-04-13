// 부분 문자열 이어 붙여 문자열 만들기

class Solution {
    public String solution(String[] my_strings, int[][] parts) {
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < my_strings.length; i++) {
            int s = parts[i][0];
            int e = parts[i][1];
            
            result.append(my_strings[i].substring(s, e + 1));
        }
        
        return result.toString();
    }
}