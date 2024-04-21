// 1로 만들기

import java.util.Arrays;

class Solution {
    int countCalc(int num) {
        int count = 0;
        
        while (num != 1) {
            num = num % 2 == 0 ? num / 2 : (num - 1) / 2;
            count += 1;
        }
        
        return count;
    }
    
    public int solution(int[] num_list) {
        return Arrays.stream(num_list)
            .reduce(0, (acc, cur) -> acc + countCalc(cur));
    }
}