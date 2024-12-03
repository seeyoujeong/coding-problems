use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs = buf
        .trim()
        .lines()
        .map(|line| {
            line.split_whitespace()
                .flat_map(str::parse::<u32>)
                .collect::<Vec<_>>()
        })
        .collect::<Vec<_>>();

    for nums in inputs {
        if nums.iter().all(|&num| num == 0) {
            break;
        }

        let mut sides = nums;
        sides.sort_unstable();

        let [a, b, c] = sides[..] else { continue };

        println!(
            "{}",
            if a * a + b * b == c * c {
                "right"
            } else {
                "wrong"
            }
        );
    }
}

use std::io;

fn main() {
    let mut lines = io::stdin().lines();
    while let Some(Ok(line)) = lines.next() {
        let nums: Vec<u32> = match line
            .split_whitespace()
            .map(|s| s.parse())
            .collect::<Result<Vec<_>, _>>()
        {
            Ok(nums) => nums,
            Err(_) => continue,
        };

        if nums.len() != 3 || nums[0] == 0 {
            break;
        }

        let mut sides = nums;
        sides.sort_unstable();

        println!(
            "{}",
            if sides[0].pow(2) + sides[1].pow(2) == sides[2].pow(2) {
                "right"
            } else {
                "wrong"
            }
        );
    }
}
