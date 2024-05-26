// 최빈값 구하기

import java.util.HashMap;

class Solution {
    public int solution(int[] array) {
        int maxCount = 0;
        int result = 0;
        HashMap<Integer, Integer> countMap = new HashMap<>();
        
        for (int num : array) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
            
            if (maxCount < countMap.get(num)) {
                maxCount = countMap.get(num);
                result = num;
            } else if (maxCount == countMap.get(num)) {
                result = -1;
            }
        }
        
        return result;
    }
}