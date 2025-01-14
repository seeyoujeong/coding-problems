use std::collections::HashSet;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut result = Vec::new();
    let mut set = HashSet::new();

    while let Some(Ok(line)) = lines.next() {
        let name = line.clone();

        if set.contains(&name) {
            result.push(name.clone());
        }

        set.insert(name);
    }

    result.sort();

    println!("{}", result.len());
    print!("{}", result.join("\n"));
}
