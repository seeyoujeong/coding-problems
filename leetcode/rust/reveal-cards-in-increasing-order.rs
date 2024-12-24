impl Solution {
    pub fn deck_revealed_increasing(mut deck: Vec<i32>) -> Vec<i32> {
        use std::collections::VecDeque;

        deck.sort_unstable_by(|a, b| b.cmp(a));

        let mut result = VecDeque::with_capacity(deck.len());

        for card in deck {
            if let Some(back_card) = result.pop_back() {
                result.push_front(back_card);
            }

            result.push_front(card);
        }

        result.into()
    }
}
