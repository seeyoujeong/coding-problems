use std::{
    collections::{HashSet, VecDeque},
    io::stdin,
};

fn main() {
    let mut lines = stdin().lines();

    let n: usize = lines.next().unwrap().unwrap().parse().unwrap();
    lines.next();

    let mut graph = vec![vec![]; n + 1];

    while let Some(Ok(line)) = lines.next() {
        let edge: Vec<usize> = line.split_whitespace().flat_map(str::parse).collect();

        let (a, b) = (edge[0], edge[1]);
        graph[a].push(b);
        graph[b].push(a);
    }

    let mut visited = HashSet::new();
    let mut queue = VecDeque::new();

    queue.push_back(1);
    visited.insert(1);

    while let Some(cur) = queue.pop_front() {
        for next in graph[cur].iter() {
            if !visited.contains(next) {
                visited.insert(*next);
                queue.push_back(*next);
            }
        }
    }

    print!("{}", visited.len() - 1);
}
