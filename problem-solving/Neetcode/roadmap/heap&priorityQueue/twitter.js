class HeapNode {
  constructor(data, weight) {
    this.data = data;
    this.weight = weight;
  }
}

class Heap {
  constructor() {
    this.heap = new Array();
  }

  parent(i) { return parseInt((i-1)/2); }

  left(i) { return 2 * i + 1; }

  right(i) { return 2 * i + 2 }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }

  heapify(i) {
    const l = this.left(i);
    const r = this.right(i);

    let greatest = (l < this.size() && this.heap[l].weight > this.heap[i].weight) ? l : i;
    if (r < this.size() && this.heap[r].weight > this.heap[greatest].weight) greatest = r;
  
    if (greatest !== i) {
      [this.heap[i], this.heap[greatest]] = [this.heap[greatest], this.heap[i]];
      this.heapify(greatest);
    }
  }

  push(data, weight) {
    const node = new HeapNode(data, weight);
    this.heap.push(node);
    
    let i = this.size() - 1;
    while (i !== 0 && this.heap[this.parent(i)].weight < this.heap[i].weight) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  pop() {
    const node = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapify(0);

    return node.data;
  }
}

class Twitter {
    constructor() {
      this.time = 0;
      this.followMap = new Map();
      this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
      if (!this.followMap.has(userId)) {
        this.followMap.set(userId, new Set());
        this.followMap.get(userId).add(userId);
      }
      if (!this.tweetMap.has(userId)) {
        this.tweetMap.set(userId, new Array());
      }

      this.tweetMap.get(userId).push([this.time, tweetId]);
      this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
      const heap = new Heap();
      const usersList = [...this.followMap.get(userId) || []];
      
      for (const userId of usersList) {
        if (this.tweetMap.has(userId)) {
          const index = this.tweetMap.get(userId).length - 1;
          const [time] = this.tweetMap.get(userId)[index];

          heap.push([userId, index], time);
        }
      }

      let res = new Array(), count = 0
      while (!heap.empty() && count < 10) {
        const [userId, index] = heap.pop();

        res.push(this.tweetMap.get(userId)[index][1]);

        if (index - 1 >= 0) {
          heap.push([userId, index - 1], this.tweetMap.get(userId)[index - 1][0]);
        }

        count++;
      }

      return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
      if (!this.followMap.has(followerId)) {
        this.followMap.set(followerId, new Set());
        this.followMap.get(followerId).add(followerId);
      }
      this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
      if (this.followMap.has(followerId) && followerId !== followeeId) {
        this.followMap.get(followerId).delete(followeeId);
      }
    }
}

const twitter = new Twitter();
twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should only contain their own tweets -> [10].
console.log(twitter.getNewsFeed(2));   // User 2's news feed should only contain their own tweets -> [20].
twitter.follow(1, 2);     // User 1 follows user 2.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
console.log(twitter.getNewsFeed(2));   // User 2's news feed should still only contain their own tweets -> [20].
twitter.unfollow(1, 2);   // User 1 unfollows user 2.
console.log(twitter.getNewsFeed(1));   // User 1's news feed should only contain their own tweets -> [10].
