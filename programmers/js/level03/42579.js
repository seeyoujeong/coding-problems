// 베스트앨범

function solution(genres, plays) {
  const data = genres.reduce((acc, cur, idx) => {
    if (cur in acc) {
      acc[cur].count += plays[idx];
      acc[cur].list.push([idx, plays[idx]]);
      acc[cur].list.sort((a, b) => b[1] - a[1]);
    } else {
      acc[cur] = {
        count: plays[idx],
        list: [[idx, plays[idx]]],
      };
    }

    return acc;
  }, {});

  return Object.values(data)
    .sort((a, b) => b.count - a.count)
    .flatMap(({ list }) => list.slice(0, 2))
    .map(([id]) => id);
}

// 데브코스
// function solution(genres, plays) {
//   const genreMap = new Map();

//   genres
//     .map((genre, index) => [genre, plays[index]])
//     .forEach(([genre, play], index) => {
//       const data = genreMap.get(genre) || { total: 0, songs: [] };
//       genreMap.set(genre, {
//         total: data.total + play,
//         songs: [...data.songs, { play, index }]
//           .sort((a, b) => b.play - a.play)
//           .slice(0, 2),
//       });
//     });

//   return [...genreMap.entries()]
//     .sort((a, b) => b[1].total - a[1].total)
//     .flatMap((item) => item[1].songs)
//     .map((song) => song.index);
// }
