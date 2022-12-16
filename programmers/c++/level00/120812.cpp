// 최빈값 구하기
#include <vector>
#include <algorithm>
#include <map>
#include <set>
using namespace std;

static bool comp(pair<int, int>& a, pair<int, int>& b) {
  return b.second < a.second;
}

int solution(vector<int> array) {
  map<int, int> countMap;
  set<int> arraySet(array.begin(), array.end());
  
  for (set<int>::iterator iter = arraySet.begin(); iter != arraySet.end(); iter++) {
    countMap.insert({*iter, count(array.begin(), array.end(), *iter)}); 
  }
  
  vector<pair<int, int>> countVector(countMap.begin(), countMap.end());
  sort(countVector.begin(), countVector.end(), comp);
  
  if (countVector[0].second == countVector[1].second) {
    return -1;
  } else {
    return countVector[0].first;
  }
}

// 다른 풀이
// #include <vector>
// #include <unordered_map>
// using namespace std;

// int solution(vector<int> array) {
//   int answer = 0;
//   int maxV = 0;

//   unordered_map<int,int> um;
//   for (const auto v : array) {
//     um[v]++;
//   }

//   for (const auto& v : um) {
//     if (v.second > maxV) {
//       maxV = v.second;
//       answer = v.first;
//     }
//     else if (v.second == maxV) {
//       answer = -1;
//     }
//   }

//   return answer;
// }