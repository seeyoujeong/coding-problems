// 조건에 맞게 수열 변환하기 1

class Solution {
    public int[] solution(int[] arr) {
        int[] result = arr.clone();
        
        for (int i = 0; i < result.length; i++) {
            if (result[i] >= 50 && result[i] % 2 == 0) {
                result[i] /= 2;
            } else if (result[i] < 50 && result[i] % 2 != 0) {
                result[i] *= 2;
            }
        }
        
        return result;
    }
}