use std::io::stdin;

fn main() {
    let mut lines = stdin().lines();
    let mut board = Vec::new();

    while let Some(Ok(line)) = lines.next() {
        let row: Vec<char> = line.chars().collect();

        board.push(row);
    }

    let mut result = 0;

    for i in 0..8 {
        for j in 0..8 {
            if i % 2 == j % 2 && board[i][j] == 'F' {
                result += 1;
            }
        }
    }

    print!("{}", result);
}
