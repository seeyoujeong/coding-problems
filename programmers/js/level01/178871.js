// 달리기 경주
function solution(players, callings) {
  const rankOfPlayersMap = new Map();

  players.forEach((player, idx) => rankOfPlayersMap.set(player, idx));

  callings.forEach((player) => {
    const rank = rankOfPlayersMap.get(player);
    const overtakenPlayer = players[rank - 1];

    rankOfPlayersMap.set(player, rank - 1);
    rankOfPlayersMap.set(overtakenPlayer, rank);
    players[rank - 1] = player;
    players[rank] = overtakenPlayer;
  });

  return players;
}

// 다른 풀이
// function solution(players, callings) {
//   const rankOfPlayersObj = {};
//   players.forEach((player, idx) => (rankOfPlayersObj[player] = idx));

//   for (const player of callings) {
//     const rank = rankOfPlayersObj[player];
//     const overtakenPlayer = players[rank - 1];

//     players[rank - 1] = player;
//     players[rank] = overtakenPlayer;
//     rankOfPlayersObj[player]--;
//     rankOfPlayersObj[overtakenPlayer]++;
//   }

//   return Object.values(players);
// }
