// https://leetcode.com/problems/robot-collisions
/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
  const robots = positions.map((elem, index) => [elem, healths[index], directions[index], index]).sort((a, b) => a[0] - b[0]);
  const stack = new Array();

  stack.push(robots.splice(0, 1)[0]);
  for (const robot of robots) {
    stack.push(robot);

    while (stack.length > 1 && stack.at(-1)[2] !== stack.at(-2)[2] && stack.at(-2)[2] === 'R') {
      const [pos1, heal1, dir1, index1] = stack.pop();
      const [pos2, heal2, dir2, index2] = stack.pop();

      if (heal1 === heal2) continue;

      if (heal1 > heal2 && heal1 > 1) {
        stack.push([pos1, heal1 - 1, dir1, index1])
      } else if (heal2 > heal1 && heal2 > 1) {
        stack.push([pos2, heal2 - 1, dir2, index2])
      }
    }
  }

  return stack.sort((a, b) => a[3] - b[3]).map(([_, health]) => health);
};

const positions = [5,46,12], healths = [3,27,43], directions = "RLL";
console.log(survivedRobotsHealths(positions, healths, directions));
