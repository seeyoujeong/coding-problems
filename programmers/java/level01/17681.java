// [1차] 비밀지도

import java.util.stream.IntStream;

class Solution {
    String decoding(int num1, int num2, int len) {
        return String.format("%" + len + "s", 
                             Integer.toString(num1 | num2, 2))
                    .replaceAll("1", "#")
                    .replaceAll("0", " ");
    }
    
    public String[] solution(int n, int[] arr1, int[] arr2) {        
        return IntStream.range(0, n)
            .mapToObj(idx -> decoding(arr1[idx], arr2[idx], n))
            .toArray(String[]::new);
    }
}