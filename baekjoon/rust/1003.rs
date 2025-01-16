use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut cache = [[0, 0]; 41];
    cache[0][0] = 1;
    cache[1][1] = 1;

    for i in 2..=40 {
        cache[i][0] = cache[i - 1][0] + cache[i - 2][0];
        cache[i][1] = cache[i - 1][1] + cache[i - 2][1];
    }

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let num: usize = line.parse().unwrap();

        writeln!(output, "{} {}", cache[num][0], cache[num][1]).unwrap();
    }
}
