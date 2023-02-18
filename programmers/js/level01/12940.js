// 최대공약수와 최소공배수
function solution(n, m) {
  const gcdNum = gcd(n, m);
  
  return [gcdNum, n * m / gcdNum];
}

function gcd(n, m) {
  let r = n % m;

  if (r === 0) {
    return m;
  } else {
    return gcd(m, r);
  }      
}

// function gcd(a, b) {
//   let r;

//   while ((a % b) > 0)  {
//     r = a % b;
//     a = b;
//     b = r;
//   }

//   return b;
// }