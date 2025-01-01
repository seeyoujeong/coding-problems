use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut stack = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let num: u32 = line.trim().parse().unwrap();

        match num == 0 {
            true => {
                stack.pop();
            }
            false => stack.push(num),
        }
    }

    let result: u32 = stack.iter().sum();

    print!("{}", result);
}
