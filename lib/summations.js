/**
 * summations.js
 * https://github.com/lapets/summations
 *
 * Library to enumerate all natural number lists with a target sum.
 *
 * @namespace summations
 */

(function (summations) {

  /**
   * Generate array of lists given a target sum and length of list.
   */
  function sumLen(sum, len) {
    if (len == 1) {
      return [[sum]];
    }
    
    var results = []
    for (var i = 0; i <= sum; i++) {
      var partials = sumLen(sum - i, len - 1);
      for (var j = 0; j < partials.length; j++) {
        results.push([i].concat(partials[j]));
      }
    }
      
    return results;    
  }
  summations.sumLen = sumLen;

}) (typeof exports !== 'undefined' ? exports : (this.summations = {}));
