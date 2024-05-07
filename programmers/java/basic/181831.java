// 특별한 이차원 배열 2

class Solution {
    public int solution(int[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[i][j] != arr[j][i]) {
                    return 0;
                }
            }
        }
        
        return 1;
    }
}