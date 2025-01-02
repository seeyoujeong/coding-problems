use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();

    let mut result = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        if line == "." {
            break;
        }

        let input = line.trim();

        let mut stack = Vec::new();
        let mut is_valid = true;

        for c in input.chars() {
            if c == '(' || c == '[' {
                stack.push(c);
            } else if c == ')' {
                let val = stack.pop();

                if val.is_none() || val.unwrap() != '(' {
                    is_valid = false;
                    break;
                }
            } else if c == ']' {
                let val = stack.pop();

                if val.is_none() || val.unwrap() != '[' {
                    is_valid = false;
                    break;
                }
            }
        }

        if stack.is_empty() && is_valid {
            result.push("yes");
        } else {
            result.push("no")
        }
    }

    print!("{}", result.join("\n"));
}
