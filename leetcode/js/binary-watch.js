/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) return [];

  const result = new Set();
  const getTimes = (m, h, count) => {
    if (count === 0) {
      const strH = String(parseInt(h, 2));
      const strM = String(parseInt(m, 2)).padStart(2, "0");
      result.add(`${strH}:${strM}`);
      return;
    }

    if (parseInt(m, 2) < 60) {
      for (let i = 0; i < m.length; i++) {
        if (m[i] === "0") {
          const nextM = m.slice(0, i) + "1" + m.slice(i + 1);
          if (parseInt(nextM, 2) < 60) {
            getTimes(nextM, h, count - 1);
          }
        }
      }
    }

    if (count > 0 && parseInt(h, 2) < 12) {
      for (let i = 0; i < h.length; i++) {
        if (h[i] === "0") {
          const nextH = h.slice(0, i) + "1" + h.slice(i + 1);
          if (parseInt(nextH, 2) < 12) {
            getTimes(m, nextH, count - 1);
          }
        }
      }
    }
  };

  getTimes("000000", "0000", turnedOn);

  return [...result];
};

var readBinaryWatch = function (turnedOn) {
  const result = [];
  const countBitsOn = (num) => {
    return num.toString(2).replaceAll("0", "").length;
  };

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const bitsOn = countBitsOn(h) + countBitsOn(m);

      if (bitsOn === turnedOn) {
        result.push(`${h}:${String(m).padStart(2, "0")}`);
      }
    }
  }

  return result;
};
