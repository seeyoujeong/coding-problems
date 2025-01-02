impl Solution {
    pub fn count_students(students: Vec<i32>, sandwiches: Vec<i32>) -> i32 {
        let mut count_students = [0, 0];

        for student in students {
            let num = student as usize;

            count_students[num] += 1;
        }

        for sandwich in sandwiches {
            let num = sandwich as usize;

            if (count_students[num] > 0) {
                count_students[num] -= 1;
            } else {
                break;
            }
        }

        count_students.iter().sum()
    }
}
