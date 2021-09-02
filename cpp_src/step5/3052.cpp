#include <iostream>
using namespace std;

int main() 
{
    int num_array[10] = {};
    int rem_array[42] = {};
    int num, sum = 0;

    for (int i = 0; i < 10; i++) 
    {
        cin >> num_array[i];
    }

    for (int i = 0; i < 10; i++)
    {
        num = num_array[i] % 42;

        if (rem_array[num] == 0)
        {
            rem_array[num]++;
        }

    }

    for (int i = 0; i < 42; i++)
    {
        sum += rem_array[i];
    }
    
    cout << sum;
}