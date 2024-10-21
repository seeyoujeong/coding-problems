/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  return command.replaceAll("(al)", "al").replaceAll("()", "o");
};
