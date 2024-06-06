// 콜라 문제

class Solution {
    public int solution(int a, int b, int n) {
        int result = 0;
        
        while (n >= a) {
            int coke = (int) n / a * b;
            result += coke;
            n = coke + n % a;
        }
        
        return result;
    }
}