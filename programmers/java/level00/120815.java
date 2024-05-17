// 피자 나눠 먹기 (2)

class Solution {
    int gcd(int a, int b) {
        while (b != 0) {
            int temp = a;
            a = b;
            b = temp % a;
        }
        
        return a;
    }
    
    public int solution(int n) {
        return n / gcd(n, 6);
    }
}