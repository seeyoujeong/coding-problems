// 평행

class Solution {
    double calcGradient(int[] arr1, int[] arr2) {
        return (arr2[1] - arr1[1]) / (double) (arr2[0] - arr1[0]);
    }
    
    public int solution(int[][] dots) {
        int[][] caseArr = {
            {0, 1, 2, 3},
            {0, 2, 1, 3},
            {0, 3, 1, 2}
        };
        
        for (int[] idx : caseArr) {
            if (calcGradient(dots[idx[0]], dots[idx[1]]) == 
                calcGradient(dots[idx[2]], dots[idx[3]])) {
                return 1;
            }
        }
        
        return 0;
    }
}