/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

var fib = function (n) {
  const arr = Array(n + 1).fill(0);
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

var fib = function (n) {
  const arr = Array(n + 1).fill(-1);
  arr[0] = 0;
  arr[1] = 1;

  const dp = (n) => {
    if (arr[n] !== -1) {
      return arr[n];
    }

    arr[n] = dp(n - 1) + dp(n - 2);
    return arr[n];
  };

  return dp(n);
};

var fib = function (n) {
  if (n < 2) {
    return n;
  }

  let a = 0;
  let b = 1;

  while (n > 1) {
    [a, b] = [b, a + b];
    n--;
  }

  return b;
};
