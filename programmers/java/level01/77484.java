// 로또의 최고 순위와 최저 순위

class Solution {
    boolean includesInt(int[] array, int value) {
        for (int num : array) {
            if (num == value) return true;
        }    
        
        return false;
    }
    
    int getRank(int number) {
        switch (number) {
            case 6: 
                return 1;
            case 5: 
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            default:
                return 6;
        }
    }
    
    public int[] solution(int[] lottos, int[] win_nums) {
        int countMatched = 0;
        int countZero = 0;
        
        for (int num : lottos) {
            if (num == 0) countZero++;
            else if (includesInt(win_nums, num)) countMatched++;
        }
        
        return new int[]{getRank(countMatched + countZero), getRank(countMatched)};
    }
}