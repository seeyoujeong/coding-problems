impl Solution {
    pub fn square_is_white(coordinates: String) -> bool {
        let mut coordinates = coordinates.bytes();
        let row = coordinates.next().unwrap() - b'a';
        let col = coordinates.next().unwrap() - b'1';

        row % 2 != col % 2
    }
}
