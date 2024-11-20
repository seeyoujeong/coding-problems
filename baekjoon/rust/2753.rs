use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let year: i32 = input.trim().parse().unwrap();

    if year % 4 == 0 && year % 100 != 0 || year % 400 == 0 {
        print!("{}", 1);
    } else {
        print!("{}", 0);
    }
}
