var RecentCounter = function () {
  this.requests = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);

  return this.requests.reduce((acc, cur) => {
    if (t - 3000 <= cur && cur <= t) {
      acc += 1;
    }

    return acc;
  }, 0);
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);

  while (this.requests[0] < t - 3000) {
    this.requests.shift();
  }

  return this.requests.length;
};
