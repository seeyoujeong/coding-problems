#include <iostream>
using namespace std;

int main()
{
    int N, min, max;
    int* array = new int;

    cin >> N;

    // int array[N]; C++17

    for (int i = 0; i < N; i++) 
    {
        cin >> array[i];
    }
    
    min = array[0];
    max = array[0];

    for (int i = 1; i < N; i++)
    {
        if (max < array[i])
        {
            max = array[i];
        }

        if (min > array[i])
        {
            min = array[i];
        }
    }
    cout << min << " " << max;
}