use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let inputs: Vec<&str> = buf.split_whitespace().collect();

    let next_num = get_next_number(inputs);

    let result = get_fizz_buzz(next_num);

    print!("{}", result);
}

fn get_next_number(arr: Vec<&str>) -> usize {
    let mut result = 0;

    for i in 0..arr.len() {
        if let Ok(num) = arr[i].parse::<usize>() {
            result = num + arr.len() - i;
            break;
        }
    }

    result
}

fn get_fizz_buzz(num: usize) -> String {
    let result = if num % 3 == 0 && num % 5 == 0 {
        "FizzBuzz"
    } else if num % 3 == 0 {
        "Fizz"
    } else if num % 5 == 0 {
        "Buzz"
    } else {
        return num.to_string();
    };

    result.to_string()
}
