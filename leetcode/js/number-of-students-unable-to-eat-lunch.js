/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  sandwiches.reverse();

  while (students.length > 0) {
    const student = students.shift();

    if (sandwiches.at(-1) !== student) {
      students.push(student);

      if (students.every((student) => student !== sandwiches.at(-1))) {
        break;
      }
    } else {
      sandwiches.pop();
    }
  }

  return students.length;
};
