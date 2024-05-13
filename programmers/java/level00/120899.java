// 가장 큰 수 찾기

class Solution {
    public int[] solution(int[] array) {
        int[] result = {0, 0};
        
        for (int i = 0; i < array.length; i++) {
            if (result[0] < array[i]) {
                result[0] = array[i];
                result[1] = i;
            }
        }
        
        return result;
    }
}