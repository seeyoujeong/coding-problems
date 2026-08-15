class Solution1:
    def countPoints(self, rings: str) -> int:
        color_dict = {
            "R": [0] * 10,
            "G": [0] * 10,
            "B": [0] * 10
        }

        for i in range(0, len(rings), 2):
            color = rings[i]
            placed = int(rings[i+1])

            color_dict[color][placed] += 1
        
        result = 0

        for i in range(10):
            flag = True

            for val in color_dict.values():
                if val[i] == 0:
                    flag = False
            
            if flag:
                result += 1
        
        return result

class Solution2:
    def countPoints(self, rings: str) -> int:
        ans = 0
        for i in range(10):
            i = str(i)
            if 'R'+i in rings and 'G'+i in rings and 'B'+i in rings:
                ans += 1
        return ans