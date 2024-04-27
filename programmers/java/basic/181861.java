// 배열의 원소만큼 추가하기

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int num : arr) {
            for (int i = 0; i < num; i++) {
                result.add(num);
            }
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}