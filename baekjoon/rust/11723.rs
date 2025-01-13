use std::collections::HashSet;
use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut set = HashSet::new();

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace();
        let command = input.next().unwrap();

        match command {
            "add" => {
                let x: u8 = input.next().unwrap().parse().unwrap();
                set.insert(x);
            }
            "remove" => {
                let x: u8 = input.next().unwrap().parse().unwrap();
                set.remove(&x);
            }
            "check" => {
                let x: u8 = input.next().unwrap().parse().unwrap();
                if set.contains(&x) {
                    writeln!(output, "{}", 1).unwrap();
                } else {
                    writeln!(output, "{}", 0).unwrap();
                }
            }
            "toggle" => {
                let x: u8 = input.next().unwrap().parse().unwrap();
                if set.contains(&x) {
                    set.remove(&x);
                } else {
                    set.insert(x);
                }
            }
            "all" => {
                set = (1..=20).collect();
            }
            "empty" => {
                set = HashSet::new();
            }
            _ => (),
        }
    }
}

use std::io::{self, BufRead, BufWriter, Write};

fn main() {
    let stdin = io::stdin();
    let mut stdout = BufWriter::new(io::stdout());
    let mut num = 0;

    for line in stdin.lock().lines() {
        let line = line.unwrap();
        let mut parts = line.split_whitespace();
        let command = parts.next().unwrap();

        match command {
            "add" => {
                let target = parts.next().unwrap().parse::<usize>().unwrap();
                num |= 1 << (target - 1);
            }
            "remove" => {
                let target = parts.next().unwrap().parse::<usize>().unwrap();
                num &= !(1 << (target - 1));
            }
            "check" => {
                let target = parts.next().unwrap().parse::<usize>().unwrap();
                if (num & (1 << (target - 1))) != 0 {
                    writeln!(stdout, "1").unwrap();
                } else {
                    writeln!(stdout, "0").unwrap();
                }
            }
            "toggle" => {
                let target = parts.next().unwrap().parse::<usize>().unwrap();
                num ^= 1 << (target - 1);
            }
            "all" => {
                num = (1 << 20) - 1;
            }
            "empty" => {
                num = 0;
            }
            _ => {}
        }
    }
}
