/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => a - b);
  let coins = 0;
  for (let i = piles.length - 2; i >= parseInt(piles.length / 3); i = i - 2) {
    coins += piles[i];
  }

  return coins;
};

const piles = [9,8,7,6,5,1,2,3,4]
console.log(maxCoins(piles));
