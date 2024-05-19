// k의 개수

import java.util.stream.IntStream;

class Solution {
    int countNum(int num, int k) {
        String[] array = String.valueOf(num).split("");
        int result = 0;
        
        for (String str : array) {
            if (str.equals(String.valueOf(k))) result++;
        }
        
        return result;
    }
    
    public int solution(int i, int j, int k) {
        return IntStream.range(i, j + 1)
            .map(num -> countNum(num, k))
            .sum();
    }
}