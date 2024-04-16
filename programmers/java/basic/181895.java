// 배열 만들기 3

import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] intervals) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int[] interval : intervals) {
            int s = interval[0];
            int e = interval[1];
            int[] slicedArray = Arrays.copyOfRange(arr, s, e + 1);
            
            for (int value : slicedArray) {
                result.add(value);
            }
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}