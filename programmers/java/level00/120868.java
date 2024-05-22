// 삼각형의 완성조건 (2)

class Solution {
    public int solution(int[] sides) {
        return Math.min(sides[0], sides[1]) * 2 - 1;
    }
}