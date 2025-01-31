use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();

    if n <= 1 {
        print!("{}", n);
    } else {
        let mut a = 0;
        let mut b = 1;

        for i in 2..=n {
            let temp = a + b;
            a = b;
            b = temp;
        }

        print!("{}", b);
    }
}
