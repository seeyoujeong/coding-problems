// 배열 만들기 6

import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    public int[] solution(int[] arr) {
        Deque<Integer> stk = new ArrayDeque<>();
        int i = 0;
        
        while (arr.length > i) {
            if (stk.size() == 0) {
                stk.addLast(arr[i]);
            } else {
                if (stk.peekLast() == arr[i]) {
                    stk.removeLast();
                } else {
                    stk.addLast(arr[i]);
                }
            }
            
            i += 1;
        }
        
        return stk.size() == 0 ? 
            new int[]{-1} : 
            stk.stream().mapToInt(v -> v).toArray();
    }
}