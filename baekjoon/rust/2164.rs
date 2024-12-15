use std::collections::VecDeque;
use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: u32 = buf.trim().parse().unwrap();

    let mut cards = VecDeque::from((1..=n).collect::<Vec<_>>());

    while cards.len() > 1 {
        cards.pop_front();
        let card = cards.pop_front().unwrap();
        cards.push_back(card);
    }

    print!("{}", cards[0]);
}
