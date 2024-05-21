// 공 던지기

class Solution {
    public int solution(int[] numbers, int k) {
        int result = 0;
        
        for (int i = 0; i < k; i++) {
            result = numbers[i * 2 % numbers.length];
        }
        
        return result;
    }
}