// 원소들의 곱과 합

class Solution {
    public int solution(int[] num_list) {
        int num1 = 1;
        int num2 = 0;
        
        for (int num : num_list) {
            num1 *= num;
            num2 += num;
        }
        
        return num1 < num2 * num2 ? 1 : 0;
    }
}