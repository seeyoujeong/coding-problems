#include <iostream>
using namespace std;

int main()
{
    int test_case, n;

    cin >> test_case;

    for (int i = 0; i < test_case; i++)
    {
        int sum = 0;
        int above_average_student = 0;
        cin >> n;

        int* score = new int[n];

        for (int j = 0; j < n; j++)
        {
            cin >> score[j];
            sum += score[j];
        }

        for (int j = 0; j < n; j++)
        {
            if (sum / n < score[j])
            {
                above_average_student++;
            }
        }

        cout << fixed;
        cout.precision(3);
        cout << (double)above_average_student / n * 100 << '%' << '\n';
    }
}