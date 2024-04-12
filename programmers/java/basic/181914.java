// 9로 나눈 나머지

import java.util.List;
import java.util.Arrays;

class Solution {
    public int solution(String number) {
        List<String> strList = Arrays.asList(number.split(""));
        
        return strList
            .stream()
            .mapToInt(Integer::parseInt)
            .reduce(0, (acc, cur) -> acc + cur) % 9;
    }
}