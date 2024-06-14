// 기사단원의 무기

import java.util.stream.IntStream;

class Solution {
    int countDivisor(int num) {
        int count = 0;
        
        for (int i = 1; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                count++;
                if (num / i != i) {
                    count++;
                }
            }
        }
        
        return count;
    }
    
    public int solution(int number, int limit, int power) {
        return IntStream.range(1, number + 1)
            .map(num -> countDivisor(num))
            .map(num -> num > limit ? power : num)
            .sum();
    }
}