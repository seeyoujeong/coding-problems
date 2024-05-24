// 문자열 밀기

class Solution {
    String pushString(String str) {
        StringBuilder result = new StringBuilder();
        String[] splitedStr = str.split("");
        
        result.append(splitedStr[splitedStr.length - 1]);
        
        for (int i = 0; i < str.length() - 1; i++) {
            result.append(splitedStr[i]);
        }
        
        return result.toString();
    }
    
    public int solution(String A, String B) {
        int count = 0;
        
        for (int i = 0; i < A.length(); i++) {
            if (A.equals(B)) {
                return count;
            }
            
            A = pushString(A);
            count++;
        }
        
        return -1;
    }
}