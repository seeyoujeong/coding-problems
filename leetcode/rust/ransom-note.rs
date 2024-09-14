impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut ransom_note = ransom_note.clone();

        for c in magazine.chars() {
            if let Some(idx) = ransom_note.find(c) {
                ransom_note.remove(idx);
            }
        }

        ransom_note.is_empty()
    }
}
