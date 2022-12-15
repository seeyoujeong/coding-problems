#include <vector>
using namespace std;

int gcd(int a, int b) {
  while (b != 0) {
    int tmp = a;
    a = b;
    b = tmp % b;
  }

  return a;
}

vector<int> solution(int denum1, int num1, int denum2, int num2) {
  int resultNum = num1 * num2;
  int resultDenum = denum1 * num2 + denum2 * num1;
  int resultGcd = gcd(resultNum, resultDenum);

  return {resultDenum / resultGcd, resultNum / resultGcd};
}