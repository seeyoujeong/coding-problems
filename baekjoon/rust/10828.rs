use std::fmt::Write;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);
    let mut stack = Vec::new();

    let mut output = String::new();

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace();
        let command = input.next().unwrap();

        match command {
            "push" => {
                let x = input.next().unwrap().parse::<i32>().unwrap();

                stack.push(x);
            }
            "pop" => {
                let val = stack.pop();

                let result = if val.is_some() { val.unwrap() } else { -1 };

                writeln!(output, "{}", result).unwrap();
            }
            "size" => {
                writeln!(output, "{}", stack.len()).unwrap();
            }
            "empty" => {
                let result = if stack.is_empty() { 1 } else { 0 };

                writeln!(output, "{}", result).unwrap();
            }
            "top" => {
                let result = if stack.is_empty() {
                    -1
                } else {
                    stack[stack.len() - 1]
                };

                writeln!(output, "{}", result).unwrap();
            }
            _ => (),
        }
    }

    print!("{}", output);
}
