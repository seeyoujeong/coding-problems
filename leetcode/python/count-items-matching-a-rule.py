class Solution:
    def countMatches(self, items: list[list[str]], ruleKey: str, ruleValue: str) -> int:
        rule_key_dict = {
            "type": 0,
            "color": 1,
            "name": 2,
        }

        return len([item for item in items if item[rule_key_dict[ruleKey]] == ruleValue])