class Solution:
    def convertDateToBinary(self, date: str) -> str:
        convert_list = [f"{int(n):b}" for n in date.split("-")]

        return "-".join(convert_list)