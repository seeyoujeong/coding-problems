struct ParkingSystem {
    big: i32,
    medium: i32,
    small: i32,
}

/**
* `&self` means the method takes an immutable reference.
* If you need a mutable reference, change it to `&mut self` instead.
*/
impl ParkingSystem {
    fn new(big: i32, medium: i32, small: i32) -> Self {
        Self { big, medium, small }
    }

    fn add_car(&mut self, car_type: i32) -> bool {
        let mut result = true;

        match car_type {
            1 => {
                if self.big > 0 {
                    self.big -= 1;
                } else {
                    result = false;
                }
            }
            2 => {
                if self.medium > 0 {
                    self.medium -= 1;
                } else {
                    result = false;
                }
            }
            3 => {
                if self.small > 0 {
                    self.small -= 1;
                } else {
                    result = false;
                }
            }
            _ => panic!("wrong car type!"),
        };

        result
    }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* let obj = ParkingSystem::new(big, medium, small);
* let ret_1: bool = obj.add_car(carType);
*/

struct ParkingSystem {
    big: i32,
    medium: i32,
    small: i32,
}

impl ParkingSystem {
    fn new(big: i32, medium: i32, small: i32) -> Self {
        ParkingSystem { big, medium, small }
    }

    fn add_car(&mut self, car_type: i32) -> bool {
        let r = match car_type {
            1 => &mut self.big,
            2 => &mut self.medium,
            _ => &mut self.small,
        };
        *r -= 1;
        *r >= 0
    }
}
