// 배열 만들기 5

import java.util.ArrayList;

class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (String intStr : intStrs) {
            int num = Integer.parseInt(intStr.substring(s, s + l));
            
            if (num > k) {
                result.add(num);
            }
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}