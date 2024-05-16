// 배열 회전시키기

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] numbers, String direction) {
        ArrayList<Integer> result = new ArrayList<>();
        
        if (direction.equals("right")) {
            result.add(numbers[numbers.length - 1]);
            
            for (int i = 0; i < numbers.length - 1; i++) {
                result.add(numbers[i]);
            }
        } else if (direction.equals("left")) {
            for (int i = 1; i < numbers.length; i++) {
                result.add(numbers[i]);
            }
            
            result.add(numbers[0]);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}