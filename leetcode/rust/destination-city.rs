impl Solution {
    pub fn dest_city(paths: Vec<Vec<String>>) -> String {
        use std::collections::HashSet;

        let mut cities = HashSet::new();

        for path in paths.iter() {
            cities.insert(path[0].clone());
        }

        for path in paths.iter() {
            let dest = path[1].clone();

            if !cities.contains(&dest) {
                return dest;
            }
        }

        panic!("no answer");
    }
}
