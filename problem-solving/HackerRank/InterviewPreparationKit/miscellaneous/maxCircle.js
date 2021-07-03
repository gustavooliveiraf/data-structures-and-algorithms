// https://www.hackerrank.com/interview/interview-preparation-kit
class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank   = new Array(size);
    this.population = new Array(size);
    this.maxPopulation = -Infinity;
    this.makeSet(size);
  }

  makeSet(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i]   = 0;
      this.population[i] = 1;
    }
  }

  find(i) {
    if (this.parent[i] !== i)
      this.parent[i] = this.find(this.parent[i]);

    return this.parent[i];
  }

  union(x, y) {
    const xroot = this.find(x);
    const yroot = this.find(y);

    if (xroot === yroot) return;

    if (this.rank[xroot] > this.rank[yroot]) {
      this.parent[yroot] = xroot;
      this.population[xroot] += this.population[yroot];
    } else if (this.rank[xroot] < this.rank[yroot]) {
      this.parent[xroot] = yroot;
      this.population[yroot] += this.population[xroot];
    } else {
      this.parent[yroot] = xroot;
      this.rank[xroot]++;
      this.population[xroot] += this.population[yroot];
    }

    this.updateLargestGroup(this.population[xroot], this.population[yroot]);
  }

  updateLargestGroup(x, y) {
    if (x > this.maxPopulation) this.maxPopulation = x;
    if (y > this.maxPopulation) this.maxPopulation = y;
  }
}

function setContInt(map, query, count) {
  let [x, y] = query;

  if (!map.has(x))
    map.set(x, count++);

  if (!map.has(y))
    map.set(y, count++);

  return count;
}

function maxCircle(queries) {
  const contInt = new Map();
  const res = new Array();
  let count = 0, x, y;

  const { length } = queries;
  for (let i = 0; i < length; i++)
    count = setContInt(contInt, queries[i], count);

  const dSet = new DisjointSet(count);
  for (let i = 0; i < length; i++) {
    [x, y] = queries[i];
    [x, y] = [contInt.get(x), contInt.get(y)];
    dSet.union(x, y);
    res.push(dSet.maxPopulation);
  }

  return res;
}

const queries = [[1000000000, 23], [11, 3778], [7, 47], [11, 1000000000]];
console.log(maxCircle(queries));
