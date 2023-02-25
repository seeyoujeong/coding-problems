// 신고 결과 받기
function solution(id_list, report, k) {
  const reportedBy = id_list.reduce((acc, cur) => ({...acc, [cur]: []}), {});
  const mailCount = id_list.reduce((acc, cur) => ({...acc, [cur]: 0}), {});

  [...new Set(report)].forEach(elem => {
    const [id, reportedId] = elem.split(' ');
    reportedBy[reportedId].push(id);
  });

  for (const id in reportedBy) {
    if (reportedBy[id].length >= k) {
      reportedBy[id].forEach(id => mailCount[id]++);
    }
  }

  return Object.values(mailCount);
}

// 효율↓
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

// 참고 풀이
// function solution(id_list, report, k) {
//   const reportSet = new Set(report);
//   const reportedCount = {};
//   const reportedBy = {};
//   const mailCount = {};

//   id_list.forEach((element) => {
//     reportedCount[element] = 0;
//     mailCount[element] = 0;
//     reportedBy[element] = [];
//   });

//   reportSet.forEach((element) => {
//     const [id, reported] = element.split(" ");
//     reportedCount[reported] += 1;
//     reportedBy[reported].push(id);
//   });

//   for (const reportedId in reportedCount) {
//     if (reportedCount[reportedId] >= k) {
//       reportedBy[reportedId].forEach((reporter) => {
//         mailCount[reporter] += 1;
//       });
//     }
//   }

//   return id_list.map((id) => mailCount[id]);
// }

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