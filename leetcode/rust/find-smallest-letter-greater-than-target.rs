impl Solution {
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        let mut start = 0;
        let mut end = letters.len() as i32 - 1;

        while start <= end {
            let mid = start + (end - start) / 2;

            if target < letters[mid as usize] {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        if (start as usize) < letters.len() {
            letters[start as usize]
        } else {
            letters[0]
        }
    }
}
