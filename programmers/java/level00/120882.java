// 등수 매기기

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Collectors;

class Solution {
    public int[] solution(int[][] score) {
        List<Double> avgScore = Arrays.stream(score)
            .map(arr -> (arr[0] + arr[1]) / 2.0)
            .collect(Collectors.toList());
        List<Double> sortedScore = new ArrayList<>(avgScore);
        sortedScore.sort(Comparator.reverseOrder());
        
        return avgScore.stream()
            .mapToInt(avg -> sortedScore.indexOf(avg) + 1)
            .toArray();
    }
}