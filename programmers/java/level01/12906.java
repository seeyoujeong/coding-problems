// 같은 숫자는 싫어

import java.util.Deque;
import java.util.ArrayDeque;

public class Solution {
    public int[] solution(int[] arr) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for (int num : arr) {
            if (stack.isEmpty() || stack.peekLast() != num) {
                stack.addLast(num);
            }
        }
        
        return stack.stream().mapToInt(v -> v).toArray();
    }
}