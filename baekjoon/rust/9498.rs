use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let score: i32 = input.trim().parse().unwrap();
    let result = match score {
        n if n >= 90 => "A",
        n if n >= 80 => "B",
        n if n >= 70 => "C",
        n if n >= 60 => "D",
        _ => "F",
    };

    print!("{}", result);
}

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let score: i32 = input.trim().parse().unwrap();
    let result = match score {
        90..=100 => "A",
        80..=89 => "B",
        70..=79 => "C",
        60..=69 => "D",
        _ => "F",
    };

    print!("{}", result);
}
