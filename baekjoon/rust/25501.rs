use std::io::{read_to_string, stdin, stdout, BufWriter, Write};

fn recursion(s: &Vec<char>, l: usize, r: usize, count: usize) -> (i32, usize) {
    if l >= r {
        return (1, count + 1);
    } else if s[l] != s[r] {
        return (0, count + 1);
    } else {
        return recursion(s, l + 1, r - 1, count + 1);
    }
}

fn is_palindrome(s: &Vec<char>) -> (i32, usize) {
    recursion(s, 0, s.len() - 1, 0)
}

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let inputs: Vec<&str> = buf.split_whitespace().skip(1).collect();

    let mut output = BufWriter::new(stdout());

    for input in inputs {
        let s: Vec<char> = input.chars().collect();
        let (result, count) = is_palindrome(&s);

        writeln!(output, "{} {}", result, count).unwrap();
    }
}
