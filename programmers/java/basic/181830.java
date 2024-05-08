// 정사각형으로 만들기

class Solution {
    public int[][] solution(int[][] arr) {
        int maxNum = Math.max(arr.length, arr[0].length);
        int[][] result = new int[maxNum][maxNum];
        
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                result[i][j] = arr[i][j];
            }
        }
        
        return result;
    }
}