#include <iostream>
using namespace std;

int main()
{
    int n;
    int max_score;
    int sum = 0;
    int score[10001] = {};

    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> score[i];
        sum += score[i];
    }

    max_score = score[0];

    for (int i = 0; i < n; i++)
    {
        if (score[i] > max_score)
        {
            max_score = score[i];
        }
    }
    
    cout << (double)sum / max_score * 100 / n;
}