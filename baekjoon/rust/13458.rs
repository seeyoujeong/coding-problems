use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();
    let mut next_line = || lines.next().unwrap().unwrap();

    let n: i64 = next_line().trim().parse().unwrap();
    let a: Vec<i64> = next_line()
        .split_whitespace()
        .flat_map(str::parse::<i64>)
        .collect();
    let bc: Vec<i64> = next_line()
        .split_whitespace()
        .flat_map(str::parse::<i64>)
        .collect();

    let main = n;
    let sub: i64 = a
        .iter()
        .map(|&v| v - bc[0])
        .filter(|&v| v > 0)
        .map(|v| (v as u32).div_ceil(bc[1] as u32) as i64)
        .sum();

    print!("{}", main + sub);
}
