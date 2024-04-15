// 카운트 다운

import java.util.stream.Stream;

class Solution {
    public int[] solution(int start_num, int end_num) {
        return Stream
            .iterate(start_num, n -> n - 1)
            .limit(start_num - end_num + 1)
            .mapToInt(Integer::intValue)
            .toArray();
    }
}