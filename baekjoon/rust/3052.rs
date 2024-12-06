use std::collections::HashSet;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();
    let mut result = HashSet::new();

    while let Some(Ok(line)) = lines.next() {
        let num: u32 = line.trim().parse().unwrap();

        result.insert(num % 42);
    }

    print!("{}", result.len());
}
