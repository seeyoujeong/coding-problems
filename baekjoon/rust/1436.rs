use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();

    let mut num = 665;

    for _ in 0..n {
        num += 1;

        while !is_contains_666(num) {
            num += 1;
        }
    }

    print!("{}", num);
}

fn is_contains_666(mut num: u32) -> bool {
    while num > 665 {
        if (num - 666) % 1000 == 0 {
            return true;
        }

        num /= 10;
    }

    false
}
