// 최대공약수와 최소공배수

class Solution {
    int gcd(int a, int b) {
        while (b != 0) {
            int r = a;
            a = b;
            b = r % a;
        }
        
        return a;
    }
    
    public int[] solution(int n, int m) {
        int gcdNum = gcd(n, m);
        
        return new int[]{ gcdNum, n * m / gcdNum };
    }
}