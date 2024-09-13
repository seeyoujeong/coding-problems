/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * unsafe fn guess(num: i32) -> i32 {}
 */

impl Solution {
    unsafe fn guessNumber(n: i32) -> i32 {
        let mut left = 1;
        let mut right = n;

        while left <= right {
            let mid = left + (right - left) / 2;

            let result = guess(mid);

            if result == -1 {
                right = mid - 1;
            } else if result == 1 {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        panic!("Error");
    }
}
