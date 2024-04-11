// 카운트 업

import java.util.ArrayList;

class Solution {
    public int[] solution(int start_num, int end_num) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = start_num; i <= end_num; i++) {
            result.add(i);
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}