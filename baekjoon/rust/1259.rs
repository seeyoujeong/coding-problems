use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();

    while let Some(Ok(line)) = lines.next() {
        let num = line.trim();

        if num == "0" {
            break;
        }

        match num.chars().rev().eq(num.chars()) {
            true => println!("yes"),
            false => println!("no"),
        }
    }
}
