/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const result = new Set();

  for (const email of emails) {
    const [localName, domainName] = email.split("@");
    const removedPlus = localName.split("+")[0];
    const removedPeriods = removedPlus.replaceAll(".", "");

    result.add(removedPeriods + "@" + domainName);
  }

  return result.size;
};
