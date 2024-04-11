// 배열 만들기 2

import java.util.ArrayList;

class Solution {
    public int[] solution(int l, int r) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = l; i <= r; i++) {
            String[] splitArr = String.valueOf(i).split("");
            boolean flag = true;
            
            for (String val : splitArr) {
                if (!val.equals("0") && !val.equals("5")) {
                    flag = false;
                    break;
                }
            }
            
            if (flag) {
                result.add(i);
            } 
        }
        
        if (result.size() == 0) result.add(-1);
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}