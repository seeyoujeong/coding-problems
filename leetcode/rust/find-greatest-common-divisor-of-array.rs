impl Solution {
    pub fn find_gcd(nums: Vec<i32>) -> i32 {
        let min_num = nums.iter().min().unwrap();
        let max_num = nums.iter().max().unwrap();

        Self::get_gcd(*min_num, *max_num)
    }

    fn get_gcd(mut a: i32, mut b: i32) -> i32 {
        while b != 0 {
            let temp = b;
            b = a % b;
            a = temp;
        }

        a
    }
}
