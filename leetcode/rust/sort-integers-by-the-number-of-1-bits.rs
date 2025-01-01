impl Solution1 {
    pub fn sort_by_bits(mut arr: Vec<i32>) -> Vec<i32> {
        arr.sort_by(|&a, &b| {
            let count_a = Self::count_bits(a);
            let count_b = Self::count_bits(b);

            match count_a == count_b {
                true => a.cmp(&b),
                false => count_a.cmp(&count_b),
            }
        });

        arr
    }

    fn count_bits(mut num: i32) -> u32 {
        let mut count = 0;

        while num > 0 {
            if (num & 1 == 1) {
                count += 1;
            }

            num >>= 1;
        }

        count
    }
}

impl Solution1 {
    pub fn sort_by_bits(arr: Vec<i32>) -> Vec<i32> {
        let mut count_bits_and_num_arr = Vec::new();

        for num in arr {
            let count_bits = num.count_ones();

            count_bits_and_num_arr.push((count_bits, num));
        }

        count_bits_and_num_arr.sort();

        count_bits_and_num_arr.iter().map(|v| v.1).collect()
    }
}
