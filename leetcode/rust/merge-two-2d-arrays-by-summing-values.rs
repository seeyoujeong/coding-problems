impl Solution {
    pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        use std::cmp::Ordering;

        let mut i = 0;
        let mut j = 0;
        let mut result = Vec::new();

        while i < nums1.len() && j < nums2.len() {
            match nums1[i][0].cmp(&nums2[j][0]) {
                Ordering::Less => {
                    result.push(nums1[i].clone());
                    i += 1;
                }
                Ordering::Equal => {
                    result.push(vec![nums1[i][0], nums1[i][1] + nums2[j][1]]);
                    i += 1;
                    j += 1;
                }
                Ordering::Greater => {
                    result.push(nums2[j].clone());
                    j += 1;
                }
            }
        }

        while i < nums1.len() {
            result.push(nums1[i].clone());
            i += 1;
        }

        while j < nums2.len() {
            result.push(nums2[j].clone());
            j += 1;
        }

        result
    }
}
