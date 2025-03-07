use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let octal_str = buf.trim();

    let binary_table = ["000", "001", "010", "011", "100", "101", "110", "111"];

    let mut result = String::new();

    for c in octal_str.chars() {
        let octal = c.to_digit(8).unwrap() as usize;
        let binary_str = binary_table[octal];

        result.push_str(binary_str);
    }

    result = result.trim_start_matches('0').to_string();

    if result.is_empty() {
        print!("0");
    } else {
        print!("{}", result);
    }
}
