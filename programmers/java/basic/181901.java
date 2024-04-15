// 배열 만들기 1

import java.util.ArrayList;

class Solution {
    public int[] solution(int n, int k) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = k; i <= n; i += k) {
            result.add(i);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}