#include <iostream>
#include <string>
#include <typeinfo>
using namespace std;

int main()
{
    int A, B, C;
    string multi_num;
    int num_count[10] = {0, };

    cin >> A >> B >> C;

    multi_num = to_string(A * B * C);

    for (int i = 0; i < multi_num.size(); i++)
    {
        switch (multi_num[i])
        {
            case '0':
                num_count[0]++;
                break;
            case '1':
                num_count[1]++;
                break;
            case '2':
                num_count[2]++;
                break;
            case '3':
                num_count[3]++;
                break;
            case '4':
                num_count[4]++;
                break;
            case '5':
                num_count[5]++;
                break;
            case '6':
                num_count[6]++;
                break;
            case '7':
                num_count[7]++;
                break;
            case '8':
                num_count[8]++;
                break;
            case '9':
                num_count[9]++;
                break;
            default:
                break;
        }
    }

    for (int i = 0; i < 10; i++)
    {
        cout << num_count[i] << '\n';
    }
}