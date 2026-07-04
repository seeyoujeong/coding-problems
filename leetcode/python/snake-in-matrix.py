class Solution:
    def finalPositionOfSnake(self, n: int, commands: list[str]) -> int:
        command_dict = {
            "UP": -n,
            "RIGHT": 1,
            "DOWN": n,
            "lEFT": -1
        }

        return sum([command_dict[command] for command in commands])