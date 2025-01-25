impl Solution {
    pub fn min_operations(boxes: String) -> Vec<i32> {
        let boxes: Vec<char> = boxes.chars().collect();
        let n = boxes.len();
        let mut result = vec![0; n];

        let mut count = 0;
        let mut operations = 0;

        for i in 0..n {
            result[i] += operations;
            count += if boxes[i] == '1' { 1 } else { 0 };
            operations += count;
        }

        count = 0;
        operations = 0;

        for i in (0..n).rev() {
            result[i] += operations;
            count += if boxes[i] == '1' { 1 } else { 0 };
            operations += count;
        }

        result
    }
}
