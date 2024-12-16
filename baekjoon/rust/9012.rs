use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    while let Some(Ok(line)) = lines.next() {
        let mut count = 0;

        for p in line.chars() {
            if p == '(' {
                count += 1;
            } else {
                count -= 1;
            }

            if count < 0 {
                break;
            }
        }

        let result = if count == 0 { "YES" } else { "NO" };

        println!("{}", result);
    }
}
