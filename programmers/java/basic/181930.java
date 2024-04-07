// 주사위 게임 2

class Solution {
    public int calcPowSum(int a, int b, int c, int powNumber) {
        return (int) Math.pow(a, powNumber) + (int) Math.pow(b, powNumber) + (int) Math.pow(c, powNumber);
    }
    
    public int solution(int a, int b, int c) {
        int score = a + b + c;
        
        if (a == b && b == c) {
            score *= calcPowSum(a, b, c, 2) * calcPowSum(a, b, c, 3);
        } else if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)) {
            score *= calcPowSum(a, b, c, 2);
        }
        
        return score;
    }
}