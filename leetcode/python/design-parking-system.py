class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.slots = [-1, big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.slots[carType] == 0:
            return False
        else:
            self.slots[carType] -= 1
            return True