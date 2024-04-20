// 수열과 구간 쿼리 1

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] result = arr.clone();
        
        for (int[] query : queries) {
            int s = query[0];
            int e = query[1];
            
            for (int i = s; i <= e; i++) {
                result[i] += 1;
            }
        }
        
        return result;
    }
}