use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);
    let n = inputs.next().unwrap() / 100 * 100;
    let f = inputs.next().unwrap();

    let mut result = 0;

    for i in 0..100 {
        let cur = n + i;

        if cur % f == 0 {
            result = i;
            break;
        }
    }

    print!("{:02}", result);
}
