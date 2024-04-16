// 첫 번째로 나오는 음수

import java.util.stream.IntStream;

class Solution {
    public int solution(int[] num_list) {
        return IntStream.range(0, num_list.length)
            .filter(i -> num_list[i] < 0)
            .findFirst()
            .orElse(-1);
    }
}