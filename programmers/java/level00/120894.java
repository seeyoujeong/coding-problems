// 영어가 싫어요

class Solution {
    public long solution(String numbers) {
        String[] numArray = {"zero", "one", "two", "three", "four", 
                       "five", "six", "seven", "eight", "nine"};
        
        for (int i = 0; i < numArray.length; i++) {
            numbers = numbers.replace(numArray[i], String.valueOf(i));
        }
        
        return Long.valueOf(numbers);
    }
}