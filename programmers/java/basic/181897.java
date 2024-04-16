// 리스트 자르기

import java.util.ArrayList;

class Solution {
    public int[] solution(int n, int[] slicer, int[] num_list) {
        ArrayList<Integer> result = new ArrayList<>();
        int a = 0;
        int b = num_list.length - 1;
        int c = 1;
        
        switch (n) {
            case 1: 
                b = slicer[1];
                break;
            case 2:
                a = slicer[0];
                break;
            case 3:
                a = slicer[0];
                b = slicer[1];
                break;
            case 4: 
                a = slicer[0];
                b = slicer[1];
                c = slicer[2];
                break;
            default: 
                break;
        }
        
        for (int i = a; i <= b; i += c) {
            result.add(num_list[i]);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}