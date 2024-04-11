// 콜라츠 수열 만들기

import java.util.ArrayList;

class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> result = new ArrayList<>();
        
        while (true) {
            result.add(n);
            
            if (n == 1) {
                break;
            }
            
            if (n % 2 == 0) {
                n /= 2;
            } else {
                n = 3 * n + 1;
            }
        }
        
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}