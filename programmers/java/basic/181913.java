// 문자열 여러 번 뒤집기

class Solution {
    StringBuilder subReverse(StringBuilder str, int s, int e) {
        StringBuilder sb = new StringBuilder(str.substring(s, e));
        sb.reverse();
        str.replace(s, e, sb.toString());
        
        return str;
    }
    
    public String solution(String my_string, int[][] queries) {
        StringBuilder result = new StringBuilder(my_string);
        
        for (int[] query : queries) {
            int s = query[0];
            int e = query[1];
            
            result = subReverse(result, s, e + 1);
        }
        
        return result.toString();
    }
}