use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let inputs: Vec<u32> = buf.split_whitespace().flat_map(str::parse::<u32>).collect();
    let m = inputs[0];
    let n = inputs[1];

    let mut nums = Vec::new();

    let mut start = 1;

    loop {
        let cur = start * start;

        if cur > n {
            break;
        }

        if cur >= m {
            nums.push(cur);
        }

        start += 1;
    }

    if nums.len() == 0 {
        print!("{}", -1);
    } else {
        let sum: u32 = nums.iter().sum();
        println!("{}", sum);
        print!("{}", nums[0]);
    }
}
