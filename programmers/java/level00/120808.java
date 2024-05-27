// 분수의 덧셈

class Solution {
    int gcd(int a, int b) {
        while (b != 0) {
            int r = a;
            a = b;
            b = r % a;
        }
        
        return a;
    }
    
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int numer = numer1 * denom2 + numer2 * denom1;
        int denom = denom1 * denom2;
        int gcdNum = gcd(numer, denom);
        
        return new int[]{numer / gcdNum, denom / gcdNum};
    }
}