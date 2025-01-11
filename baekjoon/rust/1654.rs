use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>).skip(1);

    let n = inputs.next().unwrap();
    let lans: Vec<u32> = inputs.collect();

    let mut left = 1;
    let mut right = lans.clone().into_iter().max().unwrap();

    while left <= right {
        let mid = (left + right) / 2;
        let sum = lans.iter().fold(0, |acc, cur| acc + (cur / mid));

        if sum >= n {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    print!("{}", right);
}
