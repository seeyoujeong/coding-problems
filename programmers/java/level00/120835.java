// 진료순서 정하기

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Comparator;

class Solution {
    public int[] solution(int[] emergency) {
        List<Integer> list = Arrays.stream(emergency)
            .boxed()
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
        
        return Arrays.stream(emergency)
            .map(num -> list.indexOf(num) + 1)
            .toArray();
    }
}