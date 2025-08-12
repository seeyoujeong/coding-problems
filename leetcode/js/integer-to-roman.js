/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  const strNum = String(num);
  const getRoman = (n, ten, five, one) => {
    if (n === 9) {
      return `${one}${ten}`;
    } else if (n >= 6) {
      return `${five}${one.repeat(n - 5)}`;
    } else if (n === 5) {
      return five;
    } else if (n === 4) {
      return `${one}${five}`;
    } else {
      return one.repeat(n);
    }
  };

  for (let i = strNum.length - 1; i >= 0; i--) {
    const n = Number(strNum[strNum.length - 1 - i]);

    switch (i) {
      case 3: {
        result += "M".repeat(n);
        break;
      }
      case 2: {
        result += getRoman(n, "M", "D", "C");
        break;
      }
      case 1: {
        result += getRoman(n, "C", "L", "X");
        break;
      }
      case 0: {
        result += getRoman(n, "X", "V", "I");
      }
    }
  }

  return result;
};

var intToRoman = function (num) {
  const romanMap = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    const [val, roman] = romanMap[i];

    while (num >= val) {
      num -= val;
      result += roman;
    }
  }

  return result;
};
