// 빈 배열에 추가, 삭제하기

import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for (int i = 0; i < flag.length; i++) {
            if (flag[i]) {
                for (int j = 0; j < arr[i] * 2; j++) {
                    stack.addLast(arr[i]);
                }
            } else {
                for (int j = 0; j < arr[i]; j++) {
                    stack.removeLast();
                }
            }
        }
        
        return stack.stream().mapToInt(v -> v).toArray();
    }
}