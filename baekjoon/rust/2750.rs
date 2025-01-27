use std::io::{read_to_string, stdin, stdout, BufWriter, Write};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf
        .split_whitespace()
        .skip(1)
        .flat_map(str::parse::<i32>)
        .collect::<Vec<_>>();

    inputs.sort_unstable();

    let mut output = BufWriter::new(stdout());

    for num in inputs {
        writeln!(output, "{}", num).unwrap();
    }
}
