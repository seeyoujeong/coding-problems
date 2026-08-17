class Solution:
    def countSeniors(self, details: list[str]) -> int:
        return len([info for info in details if int(info[11:13]) > 60])