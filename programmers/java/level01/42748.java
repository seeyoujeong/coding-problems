// K번째수

import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        return Arrays.stream(commands)
            .mapToInt(command -> Arrays.stream(array)
                                    .skip(command[0] - 1)
                                    .limit(command[1] - command[0] + 1)
                                    .sorted()
                                    .toArray()[command[2] - 1]
                     )
            .toArray();
    }
}