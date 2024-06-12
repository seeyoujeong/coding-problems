// 다른 사람의 풀이

import java.util.Arrays;
import java.util.List;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        List<String> nameList = Arrays.asList(name);

        return Arrays.stream(photo)
            .mapToInt(members -> 
                Arrays.stream(members)
                    .mapToInt(member -> {
                        int index = nameList.indexOf(member);
                        return index == -1 ? 0 : yearning[index];
                    })
                    .sum()
            ).toArray();
    }
}