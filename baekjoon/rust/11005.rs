use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let nums: Vec<u32> = buf.split_whitespace().flat_map(str::parse::<u32>).collect();
    let (n, b) = (nums[0], nums[1]);

    let result = convert_to_base(n, b);

    print!("{}", result);
}

fn convert_to_base(mut num: u32, base: u32) -> String {
    if num == 0 {
        return "0".to_string();
    }

    let mut result = String::new();

    while num > 0 {
        let remainder = (num % base) as u8;

        let digit = match remainder {
            0..=9 => (b'0' + remainder) as char,
            10..=35 => (b'A' + (remainder - 10)) as char,
            _ => unreachable!(),
        };

        result.insert(0, digit);
        num /= base;
    }

    result
}
