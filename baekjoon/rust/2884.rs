use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut inputs = buf.split_whitespace().map(|v| v.parse::<i32>().unwrap());
    let mut h = inputs.next().unwrap();
    let mut m = inputs.next().unwrap();

    if m < 45 {
        m = 60 + m - 45;

        if h == 0 {
            h = 23;
        } else {
            h -= 1;
        }
    } else {
        m -= 45;
    }

    print!("{} {}", h, m);
}
