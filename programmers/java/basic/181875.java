// 배열에서 문자열 대소문자 변환하기

class Solution {
    public String[] solution(String[] strArr) {
        String[] result = strArr.clone();
        
        for (int i = 0; i < result.length; i++) {
            if (i % 2 == 0) {
                result[i] = result[i].toLowerCase();
            } else {
                result[i] = result[i].toUpperCase();
            }
        }
        
        return result;
    }
}