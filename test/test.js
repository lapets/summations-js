var assert = require('assert');
var expect = require('chai').expect;
var summations = require('../lib/summations');

describe('summations', function() {
  var inp_2_1 = summations.sumLen(2, 1);
  var out_2_1 = [[2]];

  var inp_2_3 = summations.sumLen(2, 3);
  var out_2_3 =
    [
      [1, 1, 0],
      [0, 1, 1],
      [1, 0, 1],
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ];

  describe('#sumLen()', function () {
    it('sumLen', function() {
      expect(inp_2_1.sort()).to.eql(out_2_1.sort());
      expect(inp_2_3.sort()).to.eql(out_2_3.sort());
    });
  });
});
