// 정수를 나선형으로 배치하기

class Solution {
    public int[][] solution(int n) {
        int[][] result = new int[n][n];
        int row = 0;
        int col = 0;
        int num = 2;
        
        result[0][0] = 1;
        
        while (num <= n * n) {
            while (row + 1 < n && result[col][row + 1] == 0) {
                row += 1;
                result[col][row] = num;
                num += 1;
            }
            
            while (col + 1 < n && result[col + 1][row] == 0) {
                col += 1;
                result[col][row] = num;
                num += 1;
            }
            
            while (row - 1 >= 0 && result[col][row - 1] == 0) {
                row -= 1;
                result[col][row] = num;
                num += 1;
            }
            
            while (col - 1 >= 0 && result[col - 1][row] == 0) {
                col -= 1;
                result[col][row] = num;
                num += 1;
            }
        }
        
        
        return result;
    }
}