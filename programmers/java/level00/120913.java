// 잘라서 배열로 저장하기

class Solution {
    public String[] solution(String my_str, int n) {
        int len = (int) Math.ceil((double) my_str.length() / n);
        String[] result = new String[len];
        
        for (int i = 0; i < len; i++) {
            int end = i * n + n >= my_str.length() ? my_str.length() : i * n + n;
            result[i] = my_str.substring(i * n, end);
        }
        
        return result;
    }
}