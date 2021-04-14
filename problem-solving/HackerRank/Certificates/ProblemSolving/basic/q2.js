const legal = 'legal';

function maxCost(cost, labels, dailyCount) {
  let maximumCost = 0;
  let localCost = 0;
  let localDailyCount = 0;

  const { length } = cost;
  for (let i = 0; i < length; i++) {
    if (labels[i] === legal) {
      localCost += cost[i];
      localDailyCount++;

      if (localDailyCount === dailyCount) {
        if (localCost > maximumCost) maximumCost = localCost;

        localCost = 0;
        localDailyCount = 0;
      }
    } else {
      localCost += cost[i];
    }
  }

  return maximumCost;
}

const cost = [0, 3, 2, 3, 4];
const labels = ['legal', 'legal', 'ilegal', 'legal', 'legal'];
const dailyCount = 1;
// const cost = [2];
// const labels = ['ilegal'];
// const dailyCount = 1;

console.log(maxCost(cost,labels, dailyCount));
