impl Solution {
    pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let mut contain: Vec<i32> = arr1
            .iter()
            .filter(|&num| arr2.contains(num))
            .map(|num| *num)
            .collect();
        let mut uncontain: Vec<i32> = arr1
            .iter()
            .filter(|&num| !arr2.contains(num))
            .map(|num| *num)
            .collect();

        contain.sort_unstable_by(|a, b| {
            arr2.iter()
                .position(|num| a == num)
                .unwrap()
                .cmp(&arr2.iter().position(|num| b == num).unwrap())
        });
        uncontain.sort_unstable();

        vec![contain, uncontain].concat()
    }
}
