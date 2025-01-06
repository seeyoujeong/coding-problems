use std::collections::BTreeMap;
use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<i32>);
    let n = inputs.next().unwrap();
    let mut nums: Vec<_> = inputs.collect();

    nums.sort_unstable();

    let mut max_count = 0;
    let mut count_nums = BTreeMap::new();

    for num in nums.iter() {
        count_nums
            .entry(*num)
            .and_modify(|count| *count += 1)
            .or_insert(1);

        max_count = max_count.max(*count_nums.get(&num).unwrap());
    }

    let mode_list: Vec<_> = count_nums.iter().filter(|(_, &v)| v == max_count).collect();

    let min = (nums.iter().sum::<i32>() as f64 / n as f64).round() as i32;
    let median = nums[(n / 2) as usize];
    let mode = if mode_list.len() > 1 {
        *mode_list[1].0
    } else {
        *mode_list[0].0
    };
    let range = nums.last().unwrap() - nums[0];

    print!("{}\n{}\n{}\n{}", min, median, mode, range);
}
