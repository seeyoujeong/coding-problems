// 로그인 성공?

class Solution {
    public String solution(String[] id_pw, String[][] db) {
        String id = id_pw[0];
        String pw = id_pw[1];
        boolean isSameId = false;
        boolean isSamePw = false;
        
        for (String[] idPwInDB : db) {
            String idInDB = idPwInDB[0];
            String pwInDB = idPwInDB[1];
            
            if (id.equals(idInDB)) {
                isSameId = true;
                
                if (pw.equals(pwInDB)) {
                    isSamePw = true;
                }
                
                break;
            }
        }
        
        return isSameId 
            ? isSamePw 
                ? "login"
                : "wrong pw"
            : "fail";
    }
}