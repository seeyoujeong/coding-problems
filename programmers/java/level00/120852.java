// 소인수분해

import java.util.stream.IntStream;

class Solution {
    boolean isPrime(int num) {
        if (num < 2) return false;
        
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        
        return true;
    }
    
    public int[] solution(int n) {
        return IntStream.range(1, n + 1)
            .filter(num -> n % num == 0 && isPrime(num))
            .toArray();
    }
}