use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut result = String::new();

    for c in buf.chars() {
        let converted_c = if c.to_lowercase().next().unwrap() == c {
            c.to_uppercase().next().unwrap()
        } else {
            c.to_lowercase().next().unwrap()
        };

        result.push(converted_c);
    }

    print!("{}", result);
}

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let result: String = buf
        .chars()
        .map(|c| match c {
            'A'..='Z' => c.to_ascii_lowercase(),
            'a'..='z' => c.to_ascii_uppercase(),
            _ => c,
        })
        .collect();

    print!("{}", result);
}
