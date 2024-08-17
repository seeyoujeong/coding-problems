impl Solution {
    pub fn is_valid(s: String) -> bool {
        use std::collections::VecDeque;

        let mut stack: VecDeque<char> = VecDeque::new();

        for p in s.chars() {
            if p == '{' || p == '(' || p == '[' {
                stack.push_back(p);
            } else {
                let Some(c) = stack.pop_back() else {
                    return false;
                };

                if (p == ')' && c != '(') || (p == '}' && c != '{') || (p == ']' && c != '[') {
                    return false;
                }
            }
        }

        stack.is_empty()
    }
}
