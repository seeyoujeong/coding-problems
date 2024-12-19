use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let mut input = buf.split_whitespace().flat_map(str::parse::<usize>);
    let n = input.next().unwrap();
    let k = input.next().unwrap();

    let mut result = Vec::new();
    let mut vec: Vec<_> = (1..=n).collect();
    let mut cur = 0;

    while vec.len() > 0 {
        let next = (cur + k - 1) % vec.len();
        let removed = vec.splice(next..(next + 1), vec![]).collect::<Vec<_>>()[0];

        result.push(removed.to_string());
        cur = next;
    }

    print!("<{}>", result.join(", "));
}
