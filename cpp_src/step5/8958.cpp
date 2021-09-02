#include <iostream>
#include <string>
using namespace std;

int main()
{
    int test_case;

    cin >> test_case;

    string* result = new string[test_case];
    
    for (int i = 0; i < test_case; i++)
    {
        cin >> result[i];
    }

    for (int i = 0; i < test_case; i++)
    {
        int score = 0;
        int sum = 0;

        for (int j = 0; j < result[i].length(); j++)
        {
            if (result[i][j] == 'O')
            {
                score++;
                sum += score;
            }
            else
            {
                score = 0;
            }
        }

        cout << sum << '\n';
    }
}