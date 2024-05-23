// 캐릭터의 좌표

class Solution {
    public int[] solution(String[] keyinput, int[] board) {
        int[] result = {0, 0};
        int maxX = (int) Math.ceil(board[0] / 2);
        int maxY = (int) Math.ceil(board[1] / 2);
        
        for (String key : keyinput) {
            if (key.equals("up") && result[1] < maxY) {
                result[1] += 1;
            } else if (key.equals("right") && result[0] < maxX) {
                result[0] += 1;
            } else if (key.equals("down") && result[1] > -maxY) {
                result[1] -= 1;
            } else if (key.equals("left") && result[0] > -maxX) {
                result[0] -= 1;
            }
        }
        
        
        return result;
    }
}