impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        accounts
            .iter()
            .map(|wealth| wealth.iter().sum())
            .max()
            .unwrap()
    }
}
