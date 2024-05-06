// 커피 심부름

import java.util.Arrays;

class Solution {
    public int solution(String[] order) {
        return Arrays.stream(order)
            .map(menu -> menu.contains("cafelatte") ? 5000 : 4500)
            .reduce(0, (acc, cur) -> acc + cur);
    }
}