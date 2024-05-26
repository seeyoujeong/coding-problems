// 다음에 올 숫자

class Solution {
    public int solution(int[] common) {
        int a0 = common[0];
        int a1 = common[1];
        int a2 = common[2];
        int aN = common[common.length -1];
        
        return a1 - a0 == a2 - a1 
            ? aN + a1 - a0
            : aN * a1 / a0;
    }
}