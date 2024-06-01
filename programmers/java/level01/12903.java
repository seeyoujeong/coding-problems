// 가운데 글자 가져오기

class Solution {
    public String solution(String s) {
        return s.length() % 2 == 0 
            ? s.substring(s.length() / 2 - 1, s.length() / 2 + 1)
            : s.substring((int) Math.floor(s.length() / 2), 
                          (int) Math.floor(s.length() / 2) + 1);
    }
}