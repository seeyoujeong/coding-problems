class Solution:
    def recoverOrder(self, order: list[int], friends: list[int]) -> list[int]:
        return list(filter(lambda id: id in friends, order))
    
class Solution1:
    def recoverOrder(self, order: list[int], friends: list[int]) -> list[int]:
        friend_set = set(friends)
        return [x for x in order if x in friend_set]