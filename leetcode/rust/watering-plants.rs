impl Solution {
    pub fn watering_plants(plants: Vec<i32>, capacity: i32) -> i32 {
        let mut result = 0;
        let mut water = capacity;

        for i in 0..plants.len() {
            if water >= plants[i] {
                water -= plants[i];
                result += 1;
            } else {
                result += (2 * i) + 1;
                water = capacity - plants[i];
            }
        }

        result as i32
    }
}
