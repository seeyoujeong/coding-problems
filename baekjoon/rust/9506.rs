use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines();

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let num: i32 = line.parse().unwrap();

        if num == -1 {
            break;
        }

        let divisors: Vec<i32> = (1..num).filter(|n| num % n == 0).collect();
        let sum: i32 = divisors.iter().sum();

        if num == sum {
            writeln!(
                output,
                "{} = {}",
                num,
                divisors
                    .iter()
                    .map(|n| n.to_string())
                    .collect::<Vec<String>>()
                    .join(" + ")
            )
            .unwrap();
        } else {
            writeln!(output, "{} is NOT perfect.", num).unwrap();
        }
    }
}
