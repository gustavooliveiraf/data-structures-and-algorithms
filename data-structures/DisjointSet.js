class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank   = new Array(size);
    this.makeSet(size);
  }

  makeSet(size) {
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i]   = 0;
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

    if(this.rank[xroot] > this.rank[yroot])
      this.parent[yroot] = xroot;
    else if(this.rank[xroot] < this.rank[yroot])
      this.parent[xroot] = yroot;
    else {
      this.parent[yroot] = xroot;
      this.rank[xroot]++;
    }
  }
}
