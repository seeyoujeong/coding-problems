use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();
    let n_len = buf.len() as u32;

    let min_num = if n_len * 9 > n { 1 } else { n - n_len * 9 };
    let mut result = 0;

    for num in min_num..n {
        let sum = calc_sum(num);

        if sum == n {
            result = num;
            break;
        }
    }

    print!("{}", result);
}

fn calc_sum(mut num: u32) -> u32 {
    let mut result = num;

    while num != 0 {
        let temp = num % 10;
        num /= 10;
        result += temp;
    }

    result
}

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();
    let n_len = buf.len() as u32;

    let min_num = n.checked_sub(n_len * 9).unwrap_or(1);
    let result = (min_num..n).find(|&num| calc_sum(num) == n).unwrap_or(0);

    print!("{}", result);
}
