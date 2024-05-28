// 문자열 내 p와 y의 개수

class Solution {
    boolean solution(String s) {
        return s.replaceAll("[pP]", "").length() 
            == s.replaceAll("[yY]", "").length();
    }
}