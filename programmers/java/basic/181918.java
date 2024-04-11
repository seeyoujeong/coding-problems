// 배열 만들기 4

import java.util.Stack;

class Solution {
    public int[] solution(int[] arr) {
        Stack<Integer> stk = new Stack<>();
        int i = 0;
        
        while (i < arr.length) {
            if (stk.empty() || stk.peek() < arr[i]) {
                stk.push(arr[i]);
                i += 1;
            } else {
                stk.pop();
            }
        }
        
        return stk.stream().mapToInt(Integer::intValue).toArray();
    }
}