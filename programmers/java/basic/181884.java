// n보다 커질 때까지 더하기

class Solution {
    public int solution(int[] numbers, int n) {
        int result = 0;
        
        for (int number : numbers) {
            if (result > n) break;
            
            result += number;
        }
        
        return result;
    }
}