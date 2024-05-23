// 직사각형 넓이 구하기

class Solution {
    public int solution(int[][] dots) {
        int maxX = Integer.MIN_VALUE;
        int minX = Integer.MAX_VALUE;
        int maxY = Integer.MIN_VALUE;
        int minY = Integer.MAX_VALUE;
        
        for (int[] dot : dots) {
            int x = dot[0];
            int y = dot[1];
            
            maxX = Math.max(maxX, x);
            minX = Math.min(minX, x);
            maxY = Math.max(maxY, y);
            minY = Math.min(minY, y);
        }
        
        return (maxX - minX) * (maxY - minY);
    }
}