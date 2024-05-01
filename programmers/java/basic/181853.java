// 뒤에서 5등까지

import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        return Arrays.stream(num_list)
            .sorted()
            .limit(5)
            .toArray();
    }
}