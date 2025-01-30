use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let dial = [
        3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10,
    ];
    let letter = buf.trim().to_string();

    let mut result = 0;

    for b in letter.bytes() {
        let idx = (b - 65) as usize;

        result += dial[idx];
    }

    print!("{}", result);
}
