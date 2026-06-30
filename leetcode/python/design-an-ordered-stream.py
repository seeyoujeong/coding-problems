class OrderedStream:

    def __init__(self, n: int):
        self.os = [None] * n
        self.ptr = 0

    def insert(self, idKey: int, value: str) -> list[str]:
        self.os[idKey - 1] = value

        result = []

        for i in range(self.ptr, len(self.os)):
            if self.os[i] == None:
                break
            
            result.append(self.os[i])
            self.ptr += 1
        
        return result