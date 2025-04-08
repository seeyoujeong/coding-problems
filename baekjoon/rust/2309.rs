use std::io::{read_to_string, stdin, stdout, BufWriter, Write};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let heights: Vec<u8> = buf.split_whitespace().flat_map(str::parse::<u8>).collect();

    let mut result = find_seven_dwarfs(0, 0, Vec::new(), &heights).unwrap();

    result.sort();

    let mut output = BufWriter::new(stdout());

    for height in result {
        writeln!(output, "{}", height).unwrap();
    }
}

fn find_seven_dwarfs(idx: usize, sum: u8, list: Vec<u8>, heights: &Vec<u8>) -> Option<Vec<u8>> {
    if list.len() == 7 {
        return if sum == 100 { Some(list) } else { None };
    }

    for i in idx..heights.len() {
        if sum + height[i] <= 100 {
            let mut next_list = list.clone();
            next_list.push(heights[i]);

            if let Some(result) = find_seven_dwarfs(i + 1, sum + heights[i], next_list, heights) {
                return Some(result);
            }
        }
    }

    None
}

use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut heights: Vec<u8> = buf.split_whitespace().flat_map(str::parse::<u8>).collect();

    heights.sort_unstable();

    let sum: u8 = heights.iter().sum();

    for i in 0..heights.len() - 1 {
        let mut flag = false;

        for j in i + 1..heights.len() {
            if sum - heights[i] - heights[j] == 100 {
                heights[i] = 0;
                heights[j] = 0;
                flag = true;
                break;
            }
        }

        if flag {
            break;
        }
    }

    for height in heights {
        if height != 0 {
            println!("{height}");
        }
    }
}
