use std::collections::HashMap;
use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<i32>);

    let n = inputs.next().unwrap();
    let mut cards_map = HashMap::new();

    for _ in 0..n {
        let card = inputs.next().unwrap();

        cards_map
            .entry(card)
            .and_modify(|count| *count += 1)
            .or_insert(1);
    }

    let m = inputs.next().unwrap();

    for _ in 0..m {
        let num = inputs.next().unwrap();

        let count = match cards_map.get(&num) {
            Some(&n) => n,
            None => 0,
        };

        print!("{} ", count);
    }
}
