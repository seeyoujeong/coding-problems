/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const cpdomainsMap = new Map();

  for (const cpdomain of cpdomains) {
    const [rep, domain] = cpdomain.split(" ");
    const splitedDomain = domain.split(".");

    while (splitedDomain.length > 0) {
      const subdomain = splitedDomain.join(".");

      cpdomainsMap.set(
        subdomain,
        cpdomainsMap.has(subdomain)
          ? cpdomainsMap.get(subdomain) + Number(rep)
          : Number(rep)
      );

      splitedDomain.shift();
    }
  }

  return [...cpdomainsMap].map(([key, val]) => `${val} ${key}`);
};
