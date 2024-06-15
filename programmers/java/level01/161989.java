// 덧칠하기

class Solution {
    public int solution(int n, int m, int[] section) {
        int result = 0;
        int paintedSection = 0;
        
        for (int wall : section) {
            if (paintedSection < wall) {
                paintedSection = wall + m - 1;
                result++;
            }
        }
        
        return result;
    }
}