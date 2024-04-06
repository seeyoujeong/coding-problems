// 홀짝에 따라 다른 값 반환하기

class Solution {
    public int sumOdd(int n) {
        int result = 0;
        
        for (int i = 1; i <= n; i += 2) {
            result += i;
        }
        
        return result;
    }
    
    public int sumEven(int n) {
        int result = 0;
        
        for (int i = 0; i <= n; i += 2) {
            result += Math.pow(i, 2);
        }
        
        return result;
    }
    
    public int solution(int n) {
        return n % 2 == 0 ? sumEven(n) : sumOdd(n);
    }
}