#include <iostream>
using namespace std;

int main()
{
    int num, first_num, new_num;
    int cycle_len = 0;

    cin >> num;
    first_num = num;

    while (1) 
    {
      new_num = num / 10 + num % 10;
      num = (num % 10) * 10 + new_num % 10;
      cycle_len++;

      if (first_num == num)
      {
        break;
      }
    }
    cout << cycle_len;
}