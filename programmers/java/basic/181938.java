// 두 수의 연산값 비교하기

class Solution {
    public int solution(int a, int b) {
        String ab = String.valueOf(a) + String.valueOf(b);
        
        return Math.max(Integer.valueOf(ab), 2 * a * b);
    }
}