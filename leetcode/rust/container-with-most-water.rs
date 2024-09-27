impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut left = 0;
        let mut right = height.len() - 1;

        while left < right {
            let min_height = height[left].min(height[right]);
            let diff = (right - left) as i32;
            let amount = diff * min_height;
            result = result.max(amount);

            if height[left] < height[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }

        result
    }
}
