const urlMap = new Map();
const idMap = new Map();
const TINY_URL = "http://tinyurl.com/";
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var createId = function () {
  const id = Array.from({ length: 7 }, () => {
    return chars.charAt(Math.floor(Math.random() * 62));
  }).join("");

  return id;
};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (urlMap.has(longUrl)) {
    const id = urlMap.get(longUrl);

    return TINY_URL + id;
  }

  let id = createId();

  while (idMap.has(id)) {
    id = createId();
  }

  urlMap.set(longUrl, id);
  idMap.set(id, longUrl);

  return TINY_URL + id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const id = shortUrl.replace(TINY_URL, "");

  return idMap.get(id);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
