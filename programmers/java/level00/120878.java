// 유한소수 판별하기

class Solution {
    int gcd(int a, int b) {
        while (b != 0) {
            int r = a;
            a = b;
            b = r % b;
        }
        
        return a;
    }
    
    boolean isFiniteDecimal(int num) {
        while (true) {
            if (num == 1) {
                return true;
            } else if (num % 2 == 0) {
                num /= 2;
            } else if (num % 5 == 0) {
                num /= 5;
            } else {
                return false;
            }
        }
    }
    
    public int solution(int a, int b) {
        int denominator = b / gcd(a, b);
        
        return isFiniteDecimal(denominator) ? 1 : 2;
    }
}
