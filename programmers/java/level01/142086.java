// 가장 가까운 같은 글자

import java.util.stream.IntStream;

class Solution {
    public int[] solution(String s) {
        return IntStream.range(0, s.length())
            .map(idx -> {
                int lastIndex = s.substring(0, idx).lastIndexOf(s.charAt(idx));
                return lastIndex == -1 ? -1 : idx - lastIndex;
            })
            .toArray();
    }
}