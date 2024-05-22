// 구슬을 나누는 경우의 수

class Solution {
    public double solution(int balls, int share) {
        double result = 1;
        
        for (int i = 0; i < share; i++) {
            result = result * (balls - i) / (i + 1);
        }
        
        return result;
    }
}