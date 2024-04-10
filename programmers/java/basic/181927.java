// 마지막 두 원소

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] num_list) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int num : num_list) {
            result.add(num);
        }
        
        int lastNum = result.get(result.size() - 1);
        int prevLastNum = result.get(result.size() - 2);
        
        if (lastNum > prevLastNum) {
            result.add(lastNum - prevLastNum);
        } else {
            result.add(lastNum * 2);
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}