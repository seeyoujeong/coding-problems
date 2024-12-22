impl Solution {
    pub fn execute_instructions(n: i32, start_pos: Vec<i32>, s: String) -> Vec<i32> {
        let s_chars: Vec<char> = s.chars().collect();
        let mut result = Vec::new();

        for i in 0..s.len() {
            let mut count = 0;
            let mut curX = start_pos[0];
            let mut curY = start_pos[1];

            for j in i..s.len() {
                match s_chars[j] {
                    'R' => curY += 1,
                    'L' => curY -= 1,
                    'U' => curX -= 1,
                    'D' => curX += 1,
                    _ => (),
                };

                if curX < 0 || curY < 0 || curX >= n || curY >= n {
                    break;
                }

                count += 1;
            }

            result.push(count);
        }

        result
    }
}
