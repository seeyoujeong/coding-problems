// 문자 개수 세기

class Solution {
    public int[] solution(String my_string) {
        int[] result = new int[52];
        
        for (int i = 0; i < my_string.length(); i++) {
            int ascii = (int) my_string.charAt(i);
            int index = ascii >= 97 ? ascii - 71 : ascii - 65;
            
            result[index] += 1;
        }
        
        return result;
    }
}