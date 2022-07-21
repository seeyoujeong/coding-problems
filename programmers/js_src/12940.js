// 최대공약수와 최소공배수

function solution(n, m) {
  var answer = [];
  
  function gcd(n, m) {
      var r = n % m;

      if (r === 0) {
        return m;
      } else {
        return gcd(m, r);
      }      
  }
  
  answer.push(gcd(n, m), n * m / gcd(n, m));
  
  return answer;
}