class Solution:
    def sortPeople(self, names: list[str], heights: list[int]) -> list[str]:
        people = [person for person in zip(names, heights)]

        people.sort(key=lambda p: p[1], reverse=True)

        return [name for (name, height) in people]