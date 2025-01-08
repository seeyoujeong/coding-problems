use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut word = buf.trim().to_string();

    let croatia_alphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

    for c in croatia_alphabets {
        word = word.replace(c, ".");
    }

    let result = word.len();

    print!("{}", result);
}
