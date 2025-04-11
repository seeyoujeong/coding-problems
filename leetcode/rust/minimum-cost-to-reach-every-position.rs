impl Solution {
    pub fn min_costs(mut cost: Vec<i32>) -> Vec<i32> {
        for i in 1..cost.len() {
            if cost[i - 1] < cost[i] {
                cost[i] = cost[i - 1];
            }
        }

        cost
    }
}
