// 원하는 문자열 찾기

class Solution {
    public int solution(String myString, String pat) {
        return myString.toLowerCase()
            .contains(pat.toLowerCase()) ? 1 : 0;
    }
}