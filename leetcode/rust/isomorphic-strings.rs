impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        use std::collections::HashMap;

        let mut s_map: HashMap<char, char> = HashMap::new();
        let mut t_map: HashMap<char, char> = HashMap::new();

        for (sc, tc) in s.chars().zip(t.chars()) {
            match s_map.insert(sc, tc) {
                Some(prev_val) => {
                    if prev_val != tc {
                        return false;
                    }
                }
                None => (),
            }

            match t_map.insert(tc, sc) {
                Some(prev_val) => {
                    if prev_val != sc {
                        return false;
                    }
                }
                None => (),
            }
        }

        true
    }
}
