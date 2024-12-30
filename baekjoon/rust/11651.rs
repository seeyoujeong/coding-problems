use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut coords = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace().flat_map(str::parse::<i32>);
        let x = input.next().unwrap();
        let y = input.next().unwrap();

        coords.push((x, y));
    }

    coords.sort_unstable_by_key(|a| (a.1, a.0));

    let mut writer = BufWriter::new(stdout());

    for (x, y) in coords {
        writeln!(writer, "{} {}", x, y).unwrap();
    }
}
