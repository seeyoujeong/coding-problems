// 문자열이 몇 번 등장하는지 세기

class Solution {
    public int solution(String myString, String pat) {
        int count = 0;
        int patLen = pat.length();
        
        for (int i = 0; i <= myString.length() - patLen; i++) {
            if (myString.substring(i, patLen + i).equals(pat)) {
                count += 1;
            }
        }
        
        return count;
    }
}