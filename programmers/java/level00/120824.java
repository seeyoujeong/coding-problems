// 짝수 홀수 개수

class Solution {
    public int[] solution(int[] num_list) {
        int[] result = {0, 0};
        
        for (int num : num_list) {
            if (num % 2 == 0) {
                result[0] += 1;
            } else {
                result[1] += 1;
            }
        }
        
        return result;
    }
}