// 평행

function solution(dots) {
  const caseArr = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (const [idx1, idx2, idx3, idx4] of caseArr) {
    if (
      calcGradient(dots[idx1], dots[idx2]) ===
      calcGradient(dots[idx3], dots[idx4])
    ) {
      return 1;
    }
  }

  return 0;
}

function calcGradient(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
