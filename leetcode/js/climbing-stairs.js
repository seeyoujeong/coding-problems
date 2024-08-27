/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = {};
  const climbing = (n) => {
    if (n <= 3) {
      return n;
    }

    if (!(n in cache)) {
      cache[n] = climbing(n - 1) + climbing(n - 2);
    }

    return cache[n];
  };

  return climbing(n);
};

var climbStairs = function (n) {
  const cache = Array(n + 1).fill(1);

  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
};

var climbStairs = function (n) {
  let a = 0;
  let b = 1;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
};
