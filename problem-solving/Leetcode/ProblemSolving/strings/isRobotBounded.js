/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  let dir = 'n', x = 0, y = 0;
  for (const char of instructions) {
    if (char === 'G') {
      if (dir === 'n') {
        y++;
      } else if (dir === 'w') {
        x--;
      } else if (dir === 's') {
        y--;
      } else {
        x++;
      }
    } else if (char === 'R') {
      if (dir === 'n') {
        dir = 'e';
      } else if (dir === 'e') {
        dir = 's';
      } else if (dir === 's') {
        dir = 'w';
      } else {
        dir = 'n';
      }
    } else {
      if (dir === 'n') {
        dir = 'w';
      } else if (dir === 'w') {
        dir = 's';
      } else if (dir === 's') {
        dir = 'e';
      } else {
        dir = 'n';
      }
    }
  }

  return dir != 'n' || (x === 0 && y === 0) ? true : false;
};

const instructions = "LLGRL";
console.log(isRobotBounded(instructions));
