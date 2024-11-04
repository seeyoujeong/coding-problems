impl Solution {
    pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
        let mut result = 0;

        for i in 0..arr.len() {
            let total_subarrays = (i + 1) * (arr.len() - i);
            let odd_subarrays = (total_subarrays + 1) / 2;

            result += odd_subarrays * (arr[i] as usize);
        }

        result as i32
    }
}
