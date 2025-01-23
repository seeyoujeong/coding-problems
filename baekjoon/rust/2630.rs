use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();
    let size: usize = lines.next().unwrap().unwrap().parse().unwrap();
    let mut paper = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let v = line
            .split_whitespace()
            .flat_map(str::parse::<u8>)
            .collect::<Vec<_>>();

        paper.push(v);
    }

    let mut white = 0;
    let mut blue = 0;

    count_paper(&paper, 0, 0, size, &mut white, &mut blue);

    println!("{}", white);
    print!("{}", blue);
}

fn count_paper(
    paper: &Vec<Vec<u8>>,
    y: usize,
    x: usize,
    size: usize,
    white: &mut i32,
    blue: &mut i32,
) {
    let mut count1 = 0;

    for i in y..(y + size) {
        for j in x..(x + size) {
            if paper[i][j] == 1 {
                count1 += 1;
            }
        }
    }

    if count1 == 0 {
        *white += 1;
    } else if count1 == size * size {
        *blue += 1;
    } else {
        count_paper(paper, y, x, size / 2, white, blue);
        count_paper(paper, y + size / 2, x, size / 2, white, blue);
        count_paper(paper, y, x + size / 2, size / 2, white, blue);
        count_paper(paper, y + size / 2, x + size / 2, size / 2, white, blue);
    }
}
