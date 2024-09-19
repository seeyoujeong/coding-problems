/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = [...score].sort((a, b) => b - a);

  sorted.forEach((v, i) => {
    const idx = score.indexOf(v);

    if (i === 0) {
      score[idx] = "Gold Medal";
    } else if (i === 1) {
      score[idx] = "Silver Medal";
    } else if (i === 2) {
      score[idx] = "Bronze Medal";
    } else {
      score[idx] = String(i + 1);
    }
  });

  return score;
};

var findRelativeRanks = function (score) {
  const n = score.length;
  const max = Math.max(...score);
  const rank = new Array(n);
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const scoreToIndex = new Array(max + 1).fill(0);

  for (let i = 0; i < n; i++) {
    scoreToIndex[score[i]] = i + 1;
  }

  let place = 1;
  for (let i = max; i >= 0; i--) {
    if (scoreToIndex[i] !== 0) {
      let originalIndex = scoreToIndex[i] - 1;
      if (place <= 3) {
        rank[originalIndex] = medals[place - 1];
      } else {
        rank[originalIndex] = place.toString();
      }
      place++;
    }
  }
  return rank;
};
