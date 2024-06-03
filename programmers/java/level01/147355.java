// 크기가 작은 부분 문자열

class Solution {
    public int solution(String t, String p) {
        int result = 0;
        int pLen = p.length();
        long pNum = Long.parseLong(p);
        
        for (int i = 0; i < t.length() - pLen + 1; i++) {
            if (Long.parseLong(t.substring(i, i + pLen)) <= pNum) {
                result++;
            }
        }
        
        return result;
    }
}