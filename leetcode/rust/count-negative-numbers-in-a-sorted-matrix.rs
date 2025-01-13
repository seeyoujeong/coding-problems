impl Solution {
    pub fn count_negatives(grid: Vec<Vec<i32>>) -> i32 {
        let mut result = 0;

        for row in grid {
            let mut left = 0;
            let mut right = row.len() - 1;

            while left <= right {
                let mid = (left + right) / 2;

                if row[mid] < 0 {
                    if mid == 0 {
                        break;
                    }

                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

            if left != row.len() {
                result += row.len() - left;
            }
        }

        result as i32
    }
}
