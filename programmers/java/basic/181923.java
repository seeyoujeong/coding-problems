// 수열과 구간 쿼리 2

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int[] query : queries) {
            int s = query[0];
            int e = query[1];
            int k = query[2];
            int num = -1;
            
            for (int i = s; i <= e; i++) {
                if (arr[i] <= k) continue;
                num = num == -1 ? arr[i] : Math.min(num, arr[i]);
            }
            
            result.add(num);
        }
        
        return result.stream()
	        .mapToInt(Integer::intValue)
    	    .toArray();
    }
}