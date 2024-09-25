impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let max_num = candies.iter().max().unwrap();

        candies
            .iter()
            .map(|num| num + extra_candies >= *max_num)
            .collect::<Vec<bool>>()
    }
}
