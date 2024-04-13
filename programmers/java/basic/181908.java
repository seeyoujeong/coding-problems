// 접미사인지 확인하기

class Solution {
    public int solution(String my_string, String is_suffix) {
        for (int i = my_string.length() - 1; i >= 0 ; i--) {
            if (my_string.substring(i).equals(is_suffix)) {
                return 1;
            }
        }
        
        return 0;
    }
}