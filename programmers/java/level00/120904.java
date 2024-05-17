// 숫자 찾기

class Solution {
    public int solution(int num, int k) {
        int result = String.valueOf(num).indexOf(String.valueOf(k));
        return  result >= 0 ? result + 1 : result;
    }
}