/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return seats.reduce(
    (acc, cur, idx) => acc + Math.abs(cur - students[idx]),
    0
  );
};
