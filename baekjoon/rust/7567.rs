use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let dishes: Vec<char> = buf.trim().chars().collect();
    let mut result = 10;

    for i in 1..dishes.len() {
        result += if dishes[i - 1] == dishes[i] { 5 } else { 10 };
    }

    print!("{}", result);
}
