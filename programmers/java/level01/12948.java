// 핸드폰 번호 가리기

class Solution {
    public String solution(String phone_number) {
        int len = phone_number.length() - 4;
        
        return "*".repeat(len) + phone_number.substring(len);
    }
}