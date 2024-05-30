// 나머지가 1이 되는 수 찾기

class Solution {
    public int solution(int n) {
        int result = 0;
        
        for (int i = 2; i < n; i++) {
            if (n % i == 1) {
                result = i;
                break;
            }
        }
        
        return result;
    }
}