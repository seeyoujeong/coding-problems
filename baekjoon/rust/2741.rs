use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let n: usize = input.trim().parse().unwrap();

    let mut output = String::new();

    for i in 1..=n {
        write!(output, "{}\n", i).unwrap();
    }

    print!("{}", output);
}

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let n: usize = input.trim().parse().unwrap();

    let mut output = String::new();

    for i in 1..=n {
        output.push_str(&format!("{}\n", i));
    }

    print!("{}", output);
}
