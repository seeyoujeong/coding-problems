use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut alphabet = [-1; 26];

    for (i, b) in buf.trim().bytes().enumerate() {
        let code = (b - 97) as usize;

        if alphabet[code] == -1 {
            alphabet[code] = i as i32;
        }
    }

    let result = alphabet
        .iter()
        .map(|&x| x.to_string())
        .collect::<Vec<String>>();

    print!("{}", result.join(" "));
}
