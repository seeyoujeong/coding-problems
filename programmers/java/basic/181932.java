// 코드 처리하기

class Solution {
    public String solution(String code) {
        StringBuilder ret = new StringBuilder();
        char mode = '0';
        
        for (int i = 0; i < code.length(); i++) {
            if (code.charAt(i) == '1') {
                mode = mode == '0' ? '1' : '0';
                continue;
            }
            
            if (mode == '1' && i % 2 != 0) {
                ret.append(code.charAt(i));
            } 
            
            if (mode == '0' && i % 2 == 0) {
                ret.append(code.charAt(i));
            }
        }
        
        return ret.length() == 0 ? "EMPTY" : ret.toString();
    }
}