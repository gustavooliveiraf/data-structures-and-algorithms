class TimeMap {
  constructor() {
      this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, new Array());
    }

    const values = this.keyStore.get(key);
    values.push([value, timestamp]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    if (!this.keyStore.has(key)) {
      return '';
    }

    const values = this.keyStore.get(key);
    let l = 0, r = values.length - 1, result = '';
    while (l <= r) {
      const mid = (l + r) >> 1;
      const [midValue, midTime] = values[mid];

      if (timestamp === midTime) {
        return midValue;
      }
      if (midTime < timestamp) {
        result = midValue;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return result;
  }
}

const timeMap = new TimeMap();
timeMap.set('test', 'one', 10);
timeMap.set('test', 'two', 20);
timeMap.set('test', 'three', 30);
console.log(timeMap.get('test', 15));
console.log(timeMap.get('test', 25));
console.log(timeMap.get('test', 35));
