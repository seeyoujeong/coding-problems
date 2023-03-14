// [1차] 캐시
function solution(cacheSize, cities) {
  let runtime = 0;
  const cache = [];
  
  if (cacheSize == 0) {
    return cities.length * 5;
  }
  
  const citiesPriorities = cities.map(city => {
    return {
      name: city,
      priority: 0
    };
  });
  
  while (citiesPriorities.length) {
    const cityPriority = citiesPriorities.shift();
    const compareName = cacheData => 
      cacheData.name.toLowerCase() === cityPriority.name.toLowerCase();
    
    if (cache.some(compareName)) {
      runtime += 1;
      cache[cache.findIndex(compareName)].priority = 0;
    } else if (cache.length == cacheSize) {
      runtime += 5;
      cache.sort((a, b) => a.priority - b.priority);
      cache.pop();
      cache.push(cityPriority);
    } else {
      runtime += 5;
      cache.push(cityPriority);
    }
    
    cache.forEach(cacheData => cacheData.priority++);
  }
  
  return runtime;
}

// 다른 풀이
// function solution(cacheSize, cities) {
//   const MISS = 5, HIT = 1;

//   if (cacheSize === 0) return MISS * cities.length;

//   let answer = 0;
//   let cache = [];

//   cities.forEach(city => {
//     city = city.toUpperCase();

//     let idx = cache.indexOf(city);

//     if (idx > -1) {
//       cache.splice(idx, 1);
//       answer += HIT;
//     } else {
//       if (cache.length >= cacheSize) cache.shift();
//       answer += MISS;
//     }

//     cache.push(city);
//   });

//   return answer;
// }
