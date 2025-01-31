impl Solution1 {
    pub fn pick_gifts(mut gifts: Vec<i32>, k: i32) -> i64 {
        for _ in 0..k {
            let max = gifts.iter().max().unwrap();
            let idx = gifts.iter().position(|gift| gift == max).unwrap();

            gifts[idx] = (*max as f64).sqrt().floor() as i32;
        }

        gifts.iter().fold(0, |acc, cur| acc + *cur as i64)
    }
}

impl Solution2 {
    pub fn pick_gifts(mut gifts: Vec<i32>, k: i32) -> i64 {
        use std::collections::BinaryHeap;

        let mut heap = BinaryHeap::from(gifts);

        for _ in 0..k {
            let v = (heap.pop().unwrap() as f64).sqrt() as i32;

            heap.push(v);
        }

        heap.iter().map(|&x| x as i64).sum()
    }
}
