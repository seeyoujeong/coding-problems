// 더 크게 합치기

class Solution {
    public int solution(int a, int b) {
        String ab = String.valueOf(a) + String.valueOf(b);
        String ba = String.valueOf(b) + String.valueOf(a);
        
        return Math.max(Integer.valueOf(ab), Integer.valueOf(ba));
    }
}