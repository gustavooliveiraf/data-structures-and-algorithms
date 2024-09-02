// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return students.map((elem, index) => Math.abs(elem - seats[index])).reduce((acc, cur) => (acc + cur));
};

const seats = [4,1,5,9], students = [1,3,2,6];
console.log(minMovesToSeat(seats, students));
