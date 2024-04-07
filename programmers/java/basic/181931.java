// 등차수열의 특정한 항만 더하기

class Solution {
    public int solution(int a, int d, boolean[] included) {
        int result = 0;
        int term = a;
        
        for (boolean isAdd : included) {
            if (isAdd) {
                result += term;
            }
            
            term += d;
        }
        
        return result;
    }
}