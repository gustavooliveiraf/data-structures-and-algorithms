class Solution {
  dfs(adjList, src, numberOfAirport, res) {
    if (res.length === numberOfAirport + 1) return true;
    if (!adjList.has(src)) return false;

    const temp = [...adjList.get(src)];
    for (let i = 0; i < temp.length; i++) {
      adjList.get(src).splice(i, 1);
      res.push(temp[i]);

      if (this.dfs(adjList, temp[i], numberOfAirport, res)) {
        return true;
      }

      res.pop();
      adjList.get(src).splice(i, 0, temp[i]);
    }

    return false;
  }

  /**
   * @param {string[][]} tickets
   * @return {string[]}
   */
  findItinerary(tickets) {
    const adjList = new Map();

    for (const [src, _] of tickets) {
      if (!adjList.has(src)) {
        adjList.set(src, new Array());
      }
    }

    tickets.sort(([_, dest], [__, dest2]) => {
      if (dest > dest2) {
        return 1;
      }
      if (dest < dest2) {
        return -1;
      }
      return 0;
    });

    for (const [src, dest] of tickets) {
      adjList.get(src).push(dest);
    }

    const res = new Array('JFK');
    this.dfs(adjList, 'JFK', tickets.length, res);

    return res;
  }
}

const tickets = [["BUF","HOU"],["HOU","SEA"],["JFK","BUF"]];
console.log(new Solution().findItinerary(tickets));
