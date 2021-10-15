#include <iostream>
using namespace std;

int main()
{
    int H;
    int M;

    cin >> H >> M;

    if (H > 0 && M < 45)
    {
        cout << H - 1 << " " << 60 + M - 45;
    }
    else if (H == 0 && M < 45) 
    {
        cout << H + 23 << " " << 60 + M - 45;
    }
    else 
    {
        cout << H << " " << M - 45;
    }
}