// 최소직사각형

class Solution {
    public int solution(int[][] sizes) {
        int maxNum = 0;
        int minNum = 0;
        
        for (int[] size : sizes) {
            int max = Math.max(size[0], size[1]);
            int min = Math.min(size[0], size[1]);
            
            maxNum = Math.max(maxNum, max);
            minNum = Math.max(minNum, min);
        }
        
        return maxNum * minNum;
    }
}