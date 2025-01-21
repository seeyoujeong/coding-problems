use std::collections::VecDeque;
use std::io::{stdin, stdout, BufWriter, Write};

struct Point {
    y: usize,
    x: usize,
}

fn main() {
    let mut lines = stdin().lines();
    let (max_y, max_x) = {
        let line = lines.next().unwrap().unwrap();
        let mut iter = line.split_whitespace().flat_map(str::parse::<usize>);
        (iter.next().unwrap(), iter.next().unwrap())
    };

    let graph: Vec<Vec<u8>> = lines
        .map(|line| {
            line.unwrap()
                .split_whitespace()
                .flat_map(str::parse::<u8>)
                .collect()
        })
        .collect();

    let start = (0..max_y)
        .flat_map(|y| (0..max_x).map(move |x| (y, x)))
        .find(|&(y, x)| graph[y][x] == 2)
        .map(|(y, x)| Point { y, x })
        .unwrap();

    let mut dist = vec![vec![-1; max_x]; max_y];
    dist[start.y][start.x] = 0;

    let directions = [(0, 1), (0, -1), (1, 0), (-1, 0)];

    let mut queue = VecDeque::from([start]);

    while let Some(Point { y, x }) = queue.pop_front() {
        for &(dy, dx) in &directions {
            let ny = y as i32 + dy;
            let nx = x as i32 + dx;

            if ny >= 0 && nx >= 0 && ny < max_y as i32 && nx < max_x as i32 {
                let ny = ny as usize;
                let nx = nx as usize;

                if graph[ny][nx] == 1 && dist[ny][nx] == -1 {
                    dist[ny][nx] = dist[y][x] + 1;
                    queue.push_back(Point { y: ny, x: nx });
                }
            }
        }
    }

    for y in 0..max_y {
        for x in 0..max_x {
            if graph[y][x] == 0 {
                dist[y][x] = 0;
            }
        }
    }

    let mut output = BufWriter::new(stdout());
    for row in dist {
        writeln!(
            output,
            "{}",
            row.iter()
                .map(ToString::to_string)
                .collect::<Vec<_>>()
                .join(" ")
        )
        .unwrap();
    }
}
