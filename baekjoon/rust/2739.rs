use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: i32 = buf.trim().parse().unwrap();

    let mut result = Vec::new();

    for i in 1..=9 {
        result.push(format!("{} * {} = {}", n, i, n * i));
    }

    print!("{}", result.join("\n"));
}
