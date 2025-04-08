const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const heights = buf.split("\n").map(Number);

const findSevenDwarfs = (idx, list, sum) => {
  if (list.length === 7 && sum === 100) {
    return list;
  }

  for (let i = idx; i < heights.length; i++) {
    if (list.length + 1 <= 7 && sum + heights[i] <= 100) {
      const result = findSevenDwarfs(
        i + 1,
        [...list, heights[i]],
        sum + heights[i]
      );

      if (result) {
        return result;
      }
    }
  }
};

const result = findSevenDwarfs(0, [], 0);

result.sort((a, b) => a - b);

console.log(result.join("\n"));
