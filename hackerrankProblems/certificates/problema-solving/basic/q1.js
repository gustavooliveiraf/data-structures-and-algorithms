function getMinCost(crewId, jobId) {
  const crewIdSorted = crewId.sort((a, b) => a - b);
  const jobIdSorted = jobId.sort((a, b) => a - b);

  return crewIdSorted
    .map((crewIdValue, index) => (Math.abs(crewIdValue - jobIdSorted[index])))
    .reduce((acc, cur) => (acc + cur), 0);
}

// const crewId = [5, 3, 1, 4, 6];
// const jobId = [9, 8, 3, 15, 1];
const crewId = [5, 1, 4, 2];
const jobId = [4, 7, 9, 10];

console.log(getMinCost(crewId, jobId));
