// 부족한 금액 계산하기

import java.util.stream.LongStream;

class Solution {
    public long solution(int price, int money, int count) {
        long result =  LongStream.range(1, count + 1)
            .map(num -> num * price)
            .sum() - money;
        
        return result > 0 ? result : 0;
    }
}