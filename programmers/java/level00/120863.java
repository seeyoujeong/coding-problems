// 다항식 더하기

class Solution {
    public String solution(String polynomial) {
        StringBuilder sb = new StringBuilder();
        int xNum = 0;
        int num = 0;
        
        for (String val : polynomial.split(" ")) {
            if (val.contains("x")) {
                xNum += val.length() == 1 ? 1 : Integer.parseInt(val.split("x")[0]);
            } else if (!val.equals("+")) {
                num += Integer.parseInt(val);
            }
        }
        
        if (xNum > 0) {
            if (xNum > 1) sb.append(xNum);
            sb.append("x");
        } 
        
        if (num > 0) {
            if (xNum > 0) sb.append(" + ");
            sb.append(num);
        }
        
        return sb.toString();
    }
}