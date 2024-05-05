// 날짜 비교하기

import java.time.LocalDate;

class Solution {
    LocalDate dateOf(int[] date) {
        return LocalDate.of(date[0], date[1], date[2]);
    }
    
    public int solution(int[] date1, int[] date2) {
        LocalDate dateOne = dateOf(date1);
        LocalDate dateTwo = dateOf(date2);
        
        return dateOne.isBefore(dateTwo) ? 1 : 0;
    }
}