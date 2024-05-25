// OX퀴즈

class Solution {
    public String[] solution(String[] quiz) {
        String[] result = new String[quiz.length];
        
        for (int i = 0; i < quiz.length; i++) {
            String[] q = quiz[i].split(" ");
            int calc = Integer.parseInt(q[0]) + Integer.parseInt(q[2]) * (q[1].equals("+") ? 1 : -1);
            result[i] = calc == Integer.parseInt(q[4]) ? "O" : "X";
        }
        
        return result;
    }
}