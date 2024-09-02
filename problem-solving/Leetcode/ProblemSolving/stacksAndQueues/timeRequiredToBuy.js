// https://leetcode.com/problems/time-needed-to-buy-tickets/
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let time = 0;
  const queue = tickets.map((elem, i) => [elem, i]);

  while(true) {
    time++;
    const [ticket, index] = queue.shift();
    if (ticket > 1) {
      queue.push([ticket - 1, index]);
    } else if (ticket === 1 && index === k) {
      return time;
    }
  }
};

const tickets = [5,1,1,1], k = 0;
console.log(timeRequiredToBuy(tickets, k));
