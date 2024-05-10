// 개미 군단

class Solution {
    public int solution(int hp) {
        int[] ants = {5, 3, 1};
        int result = 0;
        
        for (int ant : ants) {
            result += hp / ant;
            hp %= ant;
        }
        
        return result;
    }
}