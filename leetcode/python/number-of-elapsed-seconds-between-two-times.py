class Solution:
    def secondsBetweenTimes(self, startTime: str, endTime: str) -> int:
        start_seconds = Solution.convert_seconds(startTime)
        end_seconds = Solution.convert_seconds(endTime)

        return end_seconds - start_seconds


    @staticmethod
    def convert_seconds(time: str) -> int:
        hours, minutes, seconds = map(int, time.split(":"))

        return hours * 3600 + minutes * 60 + seconds