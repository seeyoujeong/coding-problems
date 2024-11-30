use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: usize = buf.trim().parse().unwrap();

    let mut result = Vec::new();

    for i in 1..=n {
        result.push(format!("{}{}", " ".repeat(n - i), "*".repeat(i)));
    }

    print!("{}", result.join("\n"));
}
