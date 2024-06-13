// 폰켓몬

import java.util.Arrays;
import java.util.HashSet;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] nums) {
        int maxSelected = nums.length / 2;
        HashSet<Integer> kindOfPokemon = new HashSet<>(Arrays.stream(nums)
                                             .boxed()
                                             .collect(Collectors.toList())
                                            );
        
        return maxSelected <= kindOfPokemon.size() 
            ? maxSelected 
            : kindOfPokemon.size();
    }
}