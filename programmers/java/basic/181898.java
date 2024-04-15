// 가까운 1 찾기

import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] arr, int idx) {
        return Arrays.stream(arr)
            .mapToObj(String::valueOf)
            .collect(Collectors.joining(""))
            .indexOf("1", idx);
    }
}