// 정수 제곱근 판별

class Solution {
    boolean isInteger(double num) {
        return num == (int) num;
    }
    
    public double solution(long n) {
        double sqrtNum = Math.sqrt(n);
             
        return isInteger(sqrtNum) 
            ? (long) Math.pow(sqrtNum + 1, 2) 
            : -1;
    }
}