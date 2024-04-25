// 간단한 식 계산하기

class Solution {
    public int solution(String binomial) {
        String[] splited = binomial.split(" ");
        int a = Integer.parseInt(splited[0]);
        int b = Integer.parseInt(splited[2]);
        String operator = splited[1];
        
        if (operator.equals("+")) {
            return a + b;
        } else if (operator.equals("-")) {
            return a - b;
        } else {
            return a * b;
        }
    }
}