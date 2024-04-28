// 무작위로 K개의 수 뽑기

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr, int k) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int num : arr) {
            if (!result.contains(num)) {
                result.add(num);
            }
            
            if (result.size() == k) break;
        }
        
        while (result.size() < k) {
            result.add(-1);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}