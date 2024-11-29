use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().split("\n");

    let size: Vec<usize> = inputs
        .next()
        .unwrap()
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();
    let (n, m) = (size[0], size[1]);

    fn read_matrix<'a, I>(inputs: &mut I, n: usize) -> Vec<Vec<i32>>
    where
        I: Iterator<Item = &'a str>,
    {
        inputs
            .take(n)
            .map(|v| {
                v.split_whitespace()
                    .map(|v| v.parse::<i32>().unwrap())
                    .collect()
            })
            .collect()
    }

    let a = read_matrix(&mut inputs.by_ref(), n);
    let b = read_matrix(&mut inputs, n);

    let mut result = Vec::new();

    for i in 0..n {
        let mut row = Vec::new();

        for j in 0..m {
            let sum = a[i][j] + b[i][j];
            row.push(sum.to_string());
        }

        result.push(row.join(" "));
    }

    print!("{}", result.join("\n"));
}

use std::fmt::Write;
use std::io::{stdin, Read};

fn main() {
    let mut output = String::new();

    let mut buf = String::new();
    stdin().read_to_string(&mut buf).unwrap();
    let mut iter0 = buf
        .trim()
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>);

    let n = iter0.next().unwrap();
    let m = iter0.next().unwrap();

    let mut iter1 = iter0.clone();

    let mut iter2 = iter1.clone().skip((n * m) as usize);

    for _ in 0..n {
        for _ in 0..m {
            write!(output, "{} ", iter1.next().unwrap() + iter2.next().unwrap()).unwrap();
        }
        writeln!(output).unwrap();
    }

    print!("{output}");
}
