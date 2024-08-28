impl Solution1 {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut m = (m - 1) as usize;
        let mut n = (n - 1) as usize;
        let mut k = m + n + 1;

        while k >= 0 {
            if n == usize::MAX {
                break;
            }

            if m != usize::MAX && nums1[m] >= nums2[n] {
                nums1[k] = nums1[m];
                if m > 0 {
                    m -= 1;
                } else {
                    m = usize::MAX;
                }
            } else {
                nums1[k] = nums2[n];
                if n > 0 {
                    n -= 1;
                } else {
                    n = usize::MAX;
                }
            }

            if k > 0 {
                k -= 1;
            } else {
                break;
            }
        }
    }
}

impl Solution2 {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let (mut m, mut n) = (m as usize, n as usize);

        while n > 0 {
            if m > 0 && nums1[m - 1] > nums2[n - 1] {
                nums1[m + n - 1] = nums1[m - 1];
                m -= 1;
            } else {
                nums1[m + n - 1] = nums2[n - 1];
                n -= 1;
            }
        }
    }
}
