// 저주의 숫자 3

class Solution {
    public int solution(int n) {
        int count = 0;
        int result = 0;
        
        for (int i = 1; count < n; i++) {
            if (i % 3 != 0 && !String.valueOf(i).contains("3")) {
                count++;
                result = i;
            }
        }
        
        return result;
    }
}