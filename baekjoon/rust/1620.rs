use std::collections::HashMap;
use std::io::{self, BufRead, Write};

fn main() {
    let stdin = io::stdin();
    let mut input = stdin.lock().lines();

    let first_line: Vec<usize> = input
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .map(|x| x.parse().unwrap())
        .collect();

    let (n, m) = (first_line[0], first_line[1]);

    let mut pokemon = HashMap::with_capacity(n * 2);

    for i in 1..=n {
        let name = input.next().unwrap().unwrap();
        pokemon.insert(name.clone(), i.to_string());
        pokemon.insert(i.to_string(), name);
    }

    let mut output = io::BufWriter::new(io::stdout().lock());

    for _ in 0..m {
        let val = input.next().unwrap().unwrap();
        writeln!(output, "{}", pokemon.get(&val).unwrap()).unwrap();
    }
}
