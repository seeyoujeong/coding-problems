// 행렬의 덧셈
function solution(arr1, arr2) {
  return arr1.map((elem, idx1) => 
                    elem.map((val, idx2) => 
                              val + arr2[idx1][idx2]));
}
