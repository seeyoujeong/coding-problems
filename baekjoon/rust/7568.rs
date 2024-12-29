use std::io::stdin;

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut list = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let mut input = line.split_whitespace().flat_map(str::parse::<usize>);
        let weight = input.next().unwrap();
        let height = input.next().unwrap();

        list.push((weight, height));
    }

    let mut result = vec![1; list.len()];

    for i in 0..list.len() {
        let (weight1, height1) = list[i];

        for j in 0..list.len() {
            if i == j {
                continue;
            }

            let (weight2, height2) = list[j];

            if weight1 < weight2 && height1 < height2 {
                result[i] += 1;
            }
        }
    }

    for num in result {
        print!("{} ", num);
    }
}
