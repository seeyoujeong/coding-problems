use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let n = inputs.next().unwrap();
    let sequence: Vec<u32> = inputs.collect();

    let mut result = Vec::new();
    let mut stack = Vec::new();
    let mut cur_idx = 0;

    for i in 1..=n {
        stack.push(i);
        result.push("+");

        while let Some(&num) = stack.last() {
            if num == sequence[cur_idx] {
                stack.pop();
                result.push("-");
                cur_idx += 1;
            } else {
                break;
            }
        }
    }

    let output = if stack.is_empty() {
        result.join("\n")
    } else {
        "NO".to_string()
    };

    print!("{}", output);
}
