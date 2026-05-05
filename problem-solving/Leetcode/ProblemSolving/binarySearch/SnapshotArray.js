// https://leetcode.com/problems/snapshot-array/description/
/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.id = 0;
  this.history = Array.from({ length: length }, () => [[0, 0]]);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
  this.history[index].push([this.id, val]);
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
  this.id++;
  return this.id - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
  const arr = this.history[index];
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (snap_id >= arr[mid][[0]]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return arr[right][1];
};
