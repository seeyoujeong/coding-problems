impl Solution {
    pub fn final_position_of_snake(n: i32, commands: Vec<String>) -> i32 {
        let mut result = 0;

        for command in commands {
            match command.as_str() {
                "UP" => result -= n,
                "DOWN" => result += n,
                "LEFT" => result -= 1,
                "RIGHT" => result += 1,
                _ => (),
            };
        }

        result
    }
}
