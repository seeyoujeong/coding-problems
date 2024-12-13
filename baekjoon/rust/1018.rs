use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace();
    let n: usize = inputs.next().unwrap().parse().unwrap();
    let m: usize = inputs.next().unwrap().parse().unwrap();
    let board = inputs
        .map(|input| input.chars().collect::<Vec<char>>())
        .collect::<Vec<_>>();

    fn generate_board(start_color: char) -> Vec<Vec<char>> {
        let mut board = Vec::new();

        for i in 0..8 {
            let mut row = Vec::new();

            for j in 0..8 {
                let color = match i % 2 == j % 2 {
                    true => start_color,
                    false => match start_color == 'W' {
                        true => 'B',
                        false => 'W',
                    },
                };
                row.push(color);
            }

            board.push(row);
        }

        board
    }

    let white_start_board = generate_board('W');
    let black_start_board = generate_board('B');

    let count_repaint = |start_board: &Vec<Vec<char>>, x: usize, y: usize| -> usize {
        let mut count = 0;

        for i in 0..8 {
            for j in 0..8 {
                if board[x + i][y + j] != start_board[i][j] {
                    count += 1;
                }
            }
        }

        count
    };

    let mut result = usize::MAX;

    for i in 0..=(n - 8) {
        for j in 0..=(m - 8) {
            let white_start_repaint = count_repaint(&white_start_board, i, j);
            let black_start_repaint = count_repaint(&black_start_board, i, j);
            result = [result, white_start_repaint, black_start_repaint]
                .into_iter()
                .min()
                .unwrap();
        }
    }

    print!("{}", result);
}

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace();
    let n: usize = inputs.next().unwrap().parse().unwrap();
    let m: usize = inputs.next().unwrap().parse().unwrap();
    let board = inputs
        .map(|input| input.chars().collect::<Vec<char>>())
        .collect::<Vec<_>>();

    let mut result = usize::MAX;

    for i in 0..=(n - 8) {
        for j in 0..=(m - 8) {
            let mut count = 0;
            for x in 0..8 {
                for y in 0..8 {
                    if (board[i + x][j + y] == 'W') == ((x + y) % 2 == 0) {
                        count += 1;
                    }
                }
            }
            result = [result, count, 64 - count].into_iter().min().unwrap();
        }
    }

    print!("{}", result);
}
