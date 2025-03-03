impl Solution {
    pub fn sum_of_encrypted_int(nums: Vec<i32>) -> i32 {
        nums.iter().map(|&num| Self::encrypt(num)).sum()
    }

    fn encrypt(x: i32) -> i32 {
        let arr: Vec<i32> = x
            .to_string()
            .chars()
            .map(|c| c.to_digit(10).unwrap() as i32)
            .collect();
        let max = arr.iter().max().unwrap();

        max.to_string().repeat(arr.len()).parse::<i32>().unwrap()
    }
}
