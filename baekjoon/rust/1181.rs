use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut words: Vec<&str> = buf.split_whitespace().skip(1).collect();

    words.sort_by(|a, b| {
        if a.len() == b.len() {
            a.cmp(b)
        } else {
            a.len().cmp(&b.len())
        }
    });
    words.dedup();

    print!("{}", words.join("\n"));
}

fn main() {
    let mut buf = String::new();
    stdin().read_to_string(&mut buf).unwrap();
    let mut vec: Vec<&str> = buf.split_whitespace().skip(1).collect();
    vec.sort_unstable_by_key(|&str| (str.len(), str));
    vec.dedup();

    print!("{}", vec.join("\n"));
}
