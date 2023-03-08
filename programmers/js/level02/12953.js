// N개의 최소공배수
function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}

function gcd(n, m) {
  let r = m % n;
  
  if (r == 0) {
    return n;
  } else {
    return gcd(r, n);
  }

  // while (m > 0) {
  //   let r = n % m;
  //   n = m;
  //   m = r;
  // }

  // return n;
}

function lcm(n, m) {
  return n * m / gcd(n, m);
}
