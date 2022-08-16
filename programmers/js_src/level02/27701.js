// N개의 최소공배수
function solution(arr) {
  var answer = 0;
  
  answer = arr.reduce((a, b) => lcm(a, b), 1);
  
  return answer;
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