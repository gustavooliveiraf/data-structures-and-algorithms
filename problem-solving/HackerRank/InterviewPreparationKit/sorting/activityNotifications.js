// https://www.hackerrank.com/challenges/fraudulent-activity-notifications
function computeMedian(count, days, isOdd) {
  let countDays = isOdd ? (days >> 1) + 1 : days >> 1;
  let firstMedian = -1;
  for (let i = 0; i < 201; i++) {
    if (count[i] > 0) {
      if (count[i] >= countDays) {
        if (firstMedian !== -1) return (firstMedian + i) / 2;
        if (isOdd || count[i] !== countDays) return i;

        firstMedian = i;
        countDays = 1;
      } else {
        countDays -= count[i];
      }
    }
  }
}

function activityNotifications(expenditure, days) {
  const count = new Array(201).fill(0);
  for (let i = 0; i < days; i++) count[expenditure[i]]++;

  let notifications = 0;
  const isOdd = days % 2 === 1;
  for (let i = days; i < expenditure.length; i++) {
    if (expenditure[i] >= 2 * computeMedian(count, days, isOdd)) notifications++;
    count[expenditure[i]]++;
    count[expenditure[i - days]]--;
  }

  return notifications;
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3));
