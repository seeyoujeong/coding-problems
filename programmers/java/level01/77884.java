// 약수의 개수와 덧셈

import java.util.stream.IntStream;

class Solution {
    int countDivisor(int num) {
        int result = 0;
        
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) result++;
        }
        
        return result;
    }
    
    public int solution(int left, int right) {
        return IntStream.range(left, right + 1)
            .map(num -> countDivisor(num) % 2 == 0 ? num : -num)
            .sum();
    }
}