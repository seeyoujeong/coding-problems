impl Solution {
    pub fn merge_similar_items(items1: Vec<Vec<i32>>, items2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        use std::collections::HashMap;

        let mut items_map = HashMap::new();

        for item in items1.iter().chain(items2.iter()) {
            let (v, w) = (item[0], item[1]);

            items_map
                .entry(v)
                .and_modify(|weight| *weight += w)
                .or_insert(w);
        }

        let mut result: Vec<Vec<i32>> = items_map.into_iter().map(|(v, w)| vec![v, w]).collect();

        result.sort_by_key(|item| item[0]);

        result
    }
}
