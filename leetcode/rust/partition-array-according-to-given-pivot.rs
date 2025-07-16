impl Solution1 {
    pub fn pivot_array(nums: Vec<i32>, pivot: i32) -> Vec<i32> {
        let mut result = vec![0; nums.len()];
        let n = nums.len() - 1;
        let mut left = 0;
        let mut right = n;

        for i in 0..=n {
            if nums[i] < pivot {
                result[left] = nums[i];
                left += 1;
            }

            if nums[n - i] > pivot {
                result[right] = nums[n - i];
                right -= 1;
            }
        }

        while left <= right {
            result[left] = pivot;
            left += 1;
        }

        result
    }
}

impl Solution2 {
    pub fn pivot_array(nums: Vec<i32>, pivot: i32) -> Vec<i32> {
        use std::cmp::Ordering;

        let mut less = Vec::new();
        let mut equal = Vec::new();
        let mut greater = Vec::new();

        for num in nums {
            match num.cmp(&pivot) {
                Ordering::Less => less.push(num),
                Ordering::Equal => equal.push(num),
                Ordering::Greater => greater.push(num),
            }
        }

        less.extend(equal);
        less.extend(greater);

        less
    }
}
