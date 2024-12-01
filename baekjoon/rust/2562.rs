use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let inputs: Vec<i32> = buf.split_whitespace().map(|v| v.parse().unwrap()).collect();

    let mut idx = 0;
    let mut max_num = 0;

    for (i, &n) in inputs.iter().enumerate() {
        if max_num < n {
            max_num = n;
            idx = i;
        }
    }

    print!("{}\n{}", max_num, idx + 1);
}
