// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let [zeros, ones] = students.reduce(
    ([zero, one], student) => student === 0 ? [zero + 1, one] : [zero, one + 1],
    [0, 0]);

  while (sandwiches.length) {
    const topSandwich = sandwiches[0];
    if (topSandwich === 0 && zeros === 0) {
      return ones;
    } else if (topSandwich === 1 && ones === 0) {
      return zeros;
    }

    const frontStudent = students.shift();
    if (topSandwich === frontStudent) {
      sandwiches.shift();
      frontStudent === 0 ? zeros-- : ones--;
    } else {
      students.push(frontStudent);
    }
  }

  return 0;
};

const students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1];
console.log(countStudents(students, sandwiches));
