use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut inputs = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace();
        let age: u32 = input.next().unwrap().parse().unwrap();
        let name = input.next().unwrap().to_string();

        inputs.push((age, name));
    }

    inputs.sort_by_key(|(age, _)| *age);

    let mut output = String::new();

    inputs.iter().for_each(|input| {
        write!(output, "{} {}\n", input.0, input.1).unwrap();
    });

    print!("{}", output);
}
