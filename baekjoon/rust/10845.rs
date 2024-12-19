use std::collections::VecDeque;
use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut queue = VecDeque::new();
    let mut output = String::new();

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace();
        let command = input.next().unwrap();

        match command {
            "push" => {
                let x: i32 = input.next().unwrap().parse().unwrap();
                queue.push_back(x);
            }
            "pop" => {
                let num = match queue.pop_front() {
                    Some(val) => val,
                    None => -1,
                };

                writeln!(output, "{}", num).unwrap();
            }
            "size" => {
                writeln!(output, "{}", queue.len()).unwrap();
            }
            "empty" => {
                let val = if queue.is_empty() { 1 } else { 0 };

                writeln!(output, "{}", val).unwrap();
            }
            "front" => {
                let num = match queue.front() {
                    Some(&val) => val,
                    None => -1,
                };

                writeln!(output, "{}", num).unwrap();
            }
            "back" => {
                let num = match queue.back() {
                    Some(&val) => val,
                    None => -1,
                };

                writeln!(output, "{}", num).unwrap();
            }
            _ => (),
        }
    }

    print!("{}", output);
}
