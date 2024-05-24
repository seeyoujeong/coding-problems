// 치킨 쿠폰

class Solution {
    public int solution(int chicken) {
        int serviceChicken = 0;
        
        while (chicken >= 10) {
            int coupon = Integer.valueOf(chicken / 10);
            serviceChicken += coupon;
            chicken = coupon + chicken % 10;
        }
        
        return serviceChicken;
    }
}