class Graph {
  constructor(routes) {
    this.adjList = new Map();
    this.init(routes);
  }

  init(routes) {
    for (let i = 0; i < routes.length; i++) {
      for (const bus of routes[i]) {
        if (!this.adjList.has(bus)) {
          this.adjList.set(bus, new Array());
        }

        this.adjList.get(bus).push(i);
      }
    }
  }
}

class Solution {
  /**
   * @param {number[][]} routes
   * @param {number} source
   * @param {number} target
   * @return {number}
   */
  numBusesToDestination(routes, source, target) {
    if (source === target) return 0;

    const { adjList } = new Graph(routes);
    const visitedBuses = new Set([source]);
    const visitedRoutes = new Set();
    const routesSet = routes.map(route => new Set(route));
    const queue = [...(adjList.get(source) || [])];
    let numberOfBuses = 0;

    while (queue.length > 0) {
      const localQueueSize = queue.length;

      for (let i = 0; i < localQueueSize; i++) {
        const routeIndex = queue.shift();
        if (visitedRoutes.has(routeIndex)) continue;

        visitedRoutes.add(routeIndex);

        if (routesSet[routeIndex].has(target)) {
          return numberOfBuses + 1;
        }

        for (const bus of routesSet[routeIndex]) {
          if (!visitedBuses.has(bus) && adjList.get(bus)) {
            visitedBuses.add(bus);

            for (const nextRouteIndex of adjList.get(bus)) {
              queue.push(nextRouteIndex);
            }
          }
        }
      }

      numberOfBuses++;
    }

    return -1;
  }
}

const routes = [[1,2,7],[3,6,7]], source = 1, target = 6;
console.log(new Solution().numBusesToDestination(routes, source, target));
