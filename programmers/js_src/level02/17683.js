// [3차] 방금그곡
function solution(m, musicinfos) {
  var answer = '';
  let musicInfos = [];

  musicinfos = musicinfos.map(info => info.split(','));
  m = replaceSharp(m);

  for (let info of musicinfos) {
    let startTime = info[0].split(':');
    let endTime = info[1].split(':');

    if (startTime[0] > endTime[0]) {
      endTime[0] = 24 + +endTime[0];
    }

    let time = ((+endTime[0] - +startTime[0]) * 60) + +endTime[1] - +startTime[1];
    let title = info[2];

    info[3] = replaceSharp(info[3]);

    let sheet = info[3].length > time ? 
      info[3].slice(0, time) : 
      info[3].repeat(Math.ceil(time / info[3].length));

    musicInfos.push([time, title, sheet]);
  }

  musicInfos = musicInfos.filter(info => info[2].includes(m));

  if (musicInfos.length == 0) {
    answer = '(None)';
  } else if (musicInfos.length == 1) {
    answer = musicInfos[0][1];
  } else {
    let maxTime = Math.max(...musicInfos.map(info => info[0]));
    musicInfos = musicInfos.filter(info => info[0] == maxTime);
    answer = musicInfos[0][1];
  }

  return answer;
}

function replaceSharp(str) {
  const sharpArr = ['C#', 'D#', 'F#', 'G#', 'A#'];
  const replaceArr = ['c', 'd', 'f', 'g', 'a'];

  for (let i = 0; i < sharpArr.length; i++) {
    const regex = new RegExp(`(${sharpArr[i]})`, 'g');
    str = str.replace(regex, replaceArr[i]);
  }

  return str;
}

// 다른 풀이
// function solution(m, musicInfos) {
//   let answer = '';

//   musicInfos = musicInfos.map(e => {
//     let eArr = e.split(',');
//     let timeDiff = (new Date(`1970-01-01 ${eArr[1]}:00`) - new Date(`1970-01-01 ${eArr[0]}:00`)) / 60000;
//     let melody = eArr[3].replace(/[A-Z]#/g,m => m[0].toLowerCase());
//     melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
//     return `${timeDiff},${eArr[2]},${melody}`;
//   });

//   musicInfos.sort((a,b) => b.split(',')[0] - a.split(',')[0]);

//   answer = musicInfos.filter(e => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g,m => m[0].toLowerCase())) != -1);

//   return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
// }