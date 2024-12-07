use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    while let Some(Ok(line)) = lines.next() {
        let mut next_score = 1;
        let sum = line.chars().fold(0, |acc, cur| {
            if cur == 'O' {
                let cur_score = next_score;
                next_score += 1;
                acc + cur_score
            } else {
                next_score = 1;
                acc
            }
        });

        println!("{}", sum);
    }
}
