impl Solution1 {
    pub fn number_of_pairs(mut nums: Vec<i32>) -> Vec<i32> {
        let mut pairs = 0;
        let mut leftover = 0;

        while nums.len() > 0 {
            let num = nums.pop().unwrap();

            if let Some(idx) = nums.iter().position(|&n| n == num) {
                nums.remove(idx);
                pairs += 1;
            } else {
                leftover += 1;
            }
        }

        vec![pairs, leftover]
    }
}

impl Solution2 {
    pub fn number_of_pairs(nums: Vec<i32>) -> Vec<i32> {
        let mut r = vec![0; 2];
        let mut tab = vec![0; 101];
        for e in &nums {
            tab[*e as usize] += 1;
        }
        for e in tab {
            r[0] += e / 2;
        }
        r[1] = nums.len() as i32 - 2 * r[0];
        r
    }
}
