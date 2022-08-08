// 신고 결과 받기

// 비효율
// function solution(id_list, report, k) {
//   var answer = Array(id_list.length).fill(0);
//   let count = Array(id_list.length).fill(0);
//   let report_id = [];
  
//   report = [...new Set(report)];
  
//   report.forEach(contents => count[id_list.indexOf(contents.split(' ')[1])]++);
  
//   id_list.forEach(id => {
//     report_id.push(report.map(contents => {
//       let content = contents.split(' ');
//       if (id == content[0]) {
//         return content[1];
//       }
//     }))
//   });
  
//   report_id.forEach((ids, index) => {
//     ids.forEach(id => {
//       if (count[id_list.indexOf(id)] >= k) {
//         answer[index]++;
//       }
//     });
//   });
                 
//   return answer;
// }

// 참고: https://school.programmers.co.kr/questions/30817
function solution(id_list, report, k) {
  var answer = [];
  const reportSet = [...new Set(report)];
  const reportedCount = {};
  const reportedBy = {};
  const mailCount = {};

  id_list.forEach(id => {
    reportedCount[id] = 0;
    reportedBy[id] = [];
    mailCount[id] = 0;
  });

  reportSet.forEach(elem => {
    elem = elem.split(' ');
    reportedCount[elem[1]]++;
    reportedBy[elem[1]].push(elem[0]);
  });

  for (let id in reportedCount) {
    if (reportedCount[id] >= k) {
      reportedBy[id].forEach(id => mailCount[id]++);
    }
  }

  answer = Object.values(mailCount);

  return answer;
}

// 다른 풀이
// function solution(id_list, report, k) {
//   let reports = [...new Set(report)].map(a => a.split(' '));
//   let counts = new Map();

//   for (const bad of reports){
//     counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
//   }

//   let good = new Map();

//   for(const report of reports) {
//     if(counts.get(report[1]) >= k) {
//       good.set(report[0], good.get(report[0]) + 1 || 1);
//     }
//   }

//   let answer = id_list.map(a => good.get(a) || 0);
//   return answer;
// }