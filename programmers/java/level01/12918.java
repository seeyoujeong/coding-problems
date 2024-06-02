// 문자열 다루기 기본

class Solution {
    boolean isNum(String str) {
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException error) {
            return false;
        }
    }
    
    public boolean solution(String s) {
        return (s.length() == 4 || s.length() == 6 )
            && isNum(s);
    }
}