use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let word = buf.trim().to_lowercase();

    let mut count = [0; 26];

    for b in word.bytes() {
        let idx = (b - 97) as usize;
        count[idx] += 1;
    }

    let max_count = count.iter().max().unwrap();
    let idx = count.iter().position(|n| n == max_count).unwrap();

    let mut is_only = true;

    for (i, v) in count.iter().enumerate() {
        if i != idx && v == max_count {
            is_only = false;
            break;
        }
    }

    let result = if is_only {
        let ascii_value = (idx + 65) as u8;
        ascii_value as char
    } else {
        '?'
    };

    print!("{}", result);
}
