impl Solution {
    pub fn find_the_prefix_common_array(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
        let n = a.len();
        let mut num_count = vec![0; n + 1];
        let mut result = vec![0; n];

        let mut acc = 0;

        for i in 0..n {
            num_count[a[i] as usize] += 1;
            if num_count[a[i] as usize] == 2 {
                acc += 1;
            }

            num_count[b[i] as usize] += 1;
            if num_count[b[i] as usize] == 2 {
                acc += 1;
            }

            result[i] = acc;
        }

        result
    }
}
