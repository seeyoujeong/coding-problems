// 키패드 누르기

function solution(numbers, hand) {
  var answer = '';
  const leftHand = {
    main: false,
    number: 10
  };
  const rightHand = {
    main: false,
    number: 12
  };
  const location = num => [Math.floor((num - 1) / 3), (num - 1) % 3];  
  const distance = (loc1, loc2) => Math.abs(loc1[0] - loc2[0]) + Math.abs(loc1[1] - loc2[1]);

  if (hand == 'left') {
    leftHand.main = true;
  } else {
    rightHand.main = true;
  }

  numbers = numbers.map(num => num ? num : 11);

  for (let num of numbers) {
    if (num == 1 || num == 4 || num == 7) {
      answer += 'L';
      leftHand.number = num;
    } else if (num == 3 || num == 6 || num == 9) {
      answer += 'R';
      rightHand.number = num;
    } else if (distance(location(num), location(leftHand.number)) == distance(location(num), location(rightHand.number))) {
      if (leftHand.main) {
        answer += 'L';
        leftHand.number = num;
      } else {
        answer += 'R';
        rightHand.number = num;
      }
    } else if (distance(location(num), location(leftHand.number)) < distance(location(num), location(rightHand.number))) {
      answer += 'L';
      leftHand.number = num;
    } else {
      answer += 'R';
      rightHand.number = num;
    }
  }

  return answer;
}

// 다른 풀이
// function solution(numbers, hand) {
//   hand = hand[0] === "r" ? "R" : "L";
//   let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
//   let h = { L: [1, 1], R: [1, 1] };

//   return numbers.map(x => {
//     if (/[147]/.test(x)) {
//       h.L = [position[x], 1];
//       return "L";
//     }

//     if (/[369]/.test(x)) {
//       h.R = [position[x], 1];
//       return "R";
//     }

//     let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
//     let distR = Math.abs(position[x] - h.R[0]) + h.R[1];

//     if (distL === distR) {
//       h[hand] = [position[x], 0];
//       return hand;
//     }

//     if (distL < distR) {
//       h.L = [position[x], 0];
//       return "L";
//     }

//     h.R = [position[x], 0];
//     return "R";
//   }).join("");
// }