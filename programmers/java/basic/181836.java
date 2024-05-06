// 그림 확대

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public String[] solution(String[] picture, int k) {
        ArrayList<String> result = new ArrayList<>();
        
        for (String row : picture) {
            for (int i = 0; i < k; i++) {
                result.add(Arrays.stream(row.split(""))
                    .map(px -> px.repeat(k))
                    .collect(Collectors.joining()));
            }
        }
        
        return result.stream().toArray(String[]::new);
    }
}