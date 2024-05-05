// 주사위 게임 1

class Solution {
    boolean isOdd(int num) {
        return num % 2 != 0;
    }
    
    int pow2(int num) {
        return (int) Math.pow(num, 2);
    }
    
    public int solution(int a, int b) {
        int result = 0;
        
        if (isOdd(a) && isOdd(b)) {
            result = pow2(a) + pow2(b);
        } else if (isOdd(a) || isOdd(b)) {
            result = 2 * (a + b);
        } else {
            result = Math.abs(a - b);
        }
        
        return result;
    }
}