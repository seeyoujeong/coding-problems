// 두 개 뽑아서 더하기

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] numbers) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                result.add(numbers[i] + numbers[j]);
            }
        }
        
        return result.stream()
            .distinct()
            .sorted()
            .mapToInt(v -> v)
            .toArray();
    }
}