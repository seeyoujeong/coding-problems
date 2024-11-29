/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.os = Array(n).fill(null);
  this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.os[idKey - 1] = value;

  const result = [];

  for (let i = this.ptr; i < this.os.length; i++) {
    if (this.os[i] === null) {
      break;
    }

    result.push(this.os[i]);
    this.ptr++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
