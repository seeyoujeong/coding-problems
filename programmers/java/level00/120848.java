// 팩토리얼

class Solution {
    public int solution(int n) {
        int i = 1;
        
        while (true) {
            n /= i;
            
            if (n < 1) return i - 1;
            
            i++;
        }
    }
}