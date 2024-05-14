// 제곱수 판별하기

class Solution {
    public int solution(int n) {
        double sqrtN = Math.sqrt(n);
        return sqrtN == (int) sqrtN ? 1 : 2;
    }
}