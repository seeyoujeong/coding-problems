// 실패율

import java.util.Arrays;

class Solution {
    public int[] solution(int N, int[] stages) {
        int reachedPlayer = stages.length;
        int[] stageCount = new int[N + 1];
        
        for (int stage : stages) {
            stageCount[stage - 1] += 1;
        }
        
        double[][] result = new double[N][2];
        
        for (int i = 1; i <= N; i++) {
            if (reachedPlayer > 0) {
                double fail = stageCount[i - 1] / (double) reachedPlayer;
                
                result[i - 1][1] = fail;
            } else {
                result[i - 1][1] = 0;
            }
            
            reachedPlayer -= stageCount[i - 1];
            result[i - 1][0] = i;
        }
        
        return Arrays.stream(result)
            .sorted((a, b) -> {
                if (a[1] == b[1]) {
                    return a[0] - b[0] > 0 ? 1 : -1;
                } else {
                    return b[1] - a[1] > 0 ? 1 : -1;
                }
            })
            .mapToInt(v -> (int) v[0])
            .toArray();
    }
}