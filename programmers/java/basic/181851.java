// 전국 대회 선발 고사

import java.util.HashMap;
import java.util.ArrayList;


class Solution {
    public int solution(int[] rank, boolean[] attendance) {
        HashMap<String, Integer> map = new HashMap<>();

        for (int i = 0; i < rank.length; i++) {
            if (attendance[i]) {
                map.put(Integer.toString(rank[i]), i);
            }
        }

        ArrayList<String> keyList = new ArrayList<>(map.keySet());
        keyList.sort((k1, k2) -> Integer.parseInt(k1) - Integer.parseInt(k2));
        int result = 0;

        return 10000 * map.get(keyList.get(0)) + 
            100 * map.get(keyList.get(1)) +
            map.get(keyList.get(2));
    }
}