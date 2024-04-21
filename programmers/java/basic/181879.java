// 길이에 따른 연산

import java.util.Arrays;

class Solution {
    public int solution(int[] num_list) {
        if (num_list.length > 10) {
            return Arrays.stream(num_list).sum();
        } else {
            return Arrays.stream(num_list)
                .reduce(1, (acc, cur) -> acc * cur);
        }
    }
}