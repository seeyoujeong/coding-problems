// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

class Solution {
    public String solution(String myString, String pat) {
        return myString.substring(0, myString.lastIndexOf(pat)) + pat;
    }
}