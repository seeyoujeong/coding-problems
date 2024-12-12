use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut inputs = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let mut coord = line.split_whitespace().flat_map(str::parse::<i32>);
        let x = coord.next().unwrap();
        let y = coord.next().unwrap();

        inputs.push((x, y));
    }

    inputs.sort_unstable();

    let mut output = String::new();

    inputs.iter().for_each(|coord| {
        write!(output, "{} {}\n", coord.0, coord.1).unwrap();
    });

    print!("{}", output);
}
