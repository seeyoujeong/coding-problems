#include <iostream>
using namespace std;

int main()
{
    int num[9];
    int max_num = 0;
    int array_num;

    for (int i = 0; i < (sizeof(num)/sizeof(*num)); i++)
    {
        cin >> num[i];
    }

    for (int i = 0; i < (sizeof(num)/sizeof(*num)); i++)
    {
        if (max_num < num[i])
        {
            max_num = num[i];
            array_num = i + 1;
        }
    }
    cout << max_num << '\n' << array_num;
}