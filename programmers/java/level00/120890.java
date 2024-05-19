// 가까운 수

class Solution {
    public int solution(int[] array, int n) {
        int result = Integer.MAX_VALUE;
        int diff = Integer.MAX_VALUE;
        
        for (int num : array) {
            int abs = Math.abs(n - num);
            
            if (diff > abs || (diff == abs && result > num)) {
                result = num;
                diff = abs;
            }
        }
        
        return result;
    }
}