use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<usize>);

    let n = inputs.next().unwrap();
    let m = inputs.next().unwrap();

    let mut result = 0;
    let mut cards: Vec<_> = inputs.collect();
    cards.sort();

    for i in 0..(n - 2) {
        let mut left = i + 1;
        let mut right = n - 1;

        while left < right {
            let sum = cards[i] + cards[left] + cards[right];

            if sum > m {
                right -= 1;
            } else {
                if sum > result {
                    result = sum;
                }

                left += 1;
            }
        }
    }

    print!("{}", result);
}
