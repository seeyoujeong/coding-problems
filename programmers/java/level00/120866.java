// 안전지대

class Solution {
    int isMine(int val) {
        return val == 1 ? 1 : -1;
    }
    
    public int solution(int[][] board) {
        for (int i = 0; i < board.length - 1; i++) {
            for (int j = 0; j < board[0].length - 1; j++) {
                int current = board[i][j];
                int right = board[i][j + 1];
                int diagonal = board[i + 1][j + 1];
                int bottom = board[i + 1][j];
                
                if (current == 1 || right == 1 ||
                    diagonal == 1 || bottom == 1) {
                    board[i][j] = isMine(current);
                    board[i][j + 1] = isMine(right);
                    board[i + 1][j + 1] = isMine(diagonal);
                    board[i + 1][j] = isMine(bottom);
                }
            }
        }
        
        int result = 0;
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 0) result++;
            }
        }
        
        return result;
            
    }
}