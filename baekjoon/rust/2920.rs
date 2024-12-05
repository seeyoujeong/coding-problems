use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let inputs: Vec<u8> = buf.split_whitespace().flat_map(str::parse::<u8>).collect();

    let result = match inputs.windows(2).all(|w| w[0] < w[1]) {
        true => "ascending",
        false => match inputs.windows(2).all(|w| w[0] > w[1]) {
            true => "descending",
            false => "mixed",
        },
    };

    print!("{}", result);
}
