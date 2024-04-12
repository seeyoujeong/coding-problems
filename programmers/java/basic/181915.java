// 글자 이어 붙여 문자열 만들기

class Solution {
    public String solution(String my_string, int[] index_list) {
        StringBuilder result = new StringBuilder();
        
        for (int index : index_list) {
            result.append(my_string.charAt(index));
        }
        
        return result.toString();
    }
}