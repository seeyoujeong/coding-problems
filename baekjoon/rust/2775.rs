use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<usize>);

    let t = inputs.next().unwrap();

    for _ in 0..t {
        let k = inputs.next().unwrap();
        let n = inputs.next().unwrap();

        let mut residents = vec![0; n + 1];
        for i in 1..=n {
            residents[i] = i;
        }

        for floor in 1..=k {
            for room in 1..=n {
                residents[room] += residents[room - 1];
            }
        }

        println!("{}", residents[n]);
    }
}
