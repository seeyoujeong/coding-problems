use std::collections::VecDeque;
use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();
    let mut next_line = || lines.next().unwrap().unwrap();

    let t: u32 = next_line().parse().unwrap();

    let mut result = Vec::new();

    for _ in 0..t {
        let input: Vec<_> = next_line()
            .split_whitespace()
            .flat_map(str::parse::<usize>)
            .collect();
        let m: usize = input[1];

        let mut queue: VecDeque<_> = next_line()
            .split_whitespace()
            .flat_map(str::parse::<usize>)
            .enumerate()
            .collect();

        let mut count = 1;

        loop {
            let cur = queue.pop_front().unwrap();

            if queue.iter().all(|&val| cur.1 >= val.1) {
                if m == cur.0 {
                    result.push(count.to_string());
                    break;
                }

                count += 1;
            } else {
                queue.push_back(cur);
            }
        }
    }

    print!("{}", result.join("\n"));
}
