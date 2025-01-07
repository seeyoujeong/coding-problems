use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut result = 0;

    while let Some(Ok(line)) = lines.next() {
        let word = line.trim();
        let mut stack = Vec::new();
        let mut is_group_word = true;

        for c in word.chars() {
            match stack.contains(&c) {
                true => {
                    if *stack.last().unwrap() != c {
                        is_group_word = false;
                        break;
                    }
                }
                false => {
                    stack.push(c);
                }
            }
        }

        if is_group_word {
            result += 1;
        }
    }

    print!("{}", result);
}
