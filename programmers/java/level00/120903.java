// 배열의 유사도

import java.util.Arrays;
import java.util.HashSet;

class Solution {
    public int solution(String[] s1, String[] s2) {
        HashSet<String> set1 = new HashSet<>(Arrays.asList(s1));
        HashSet<String> set2 = new HashSet<>(Arrays.asList(s2));
        
        set1.retainAll(set2);
        
        return set1.size();
    }
}