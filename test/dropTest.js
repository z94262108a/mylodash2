const assert = require('assert')
const _ = require('../src/drop')

/*
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
*/

describe('lodash', function() {
  describe('drop', function() {
    it("_.drop([1, 2, 3], 2) equalTo [ 3 ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 2), [3])
    });
    it("_.drop([1, 2, 3], 5) equalTo [ ]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 5), [])
    });
    it("_.drop([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
      assert.deepStrictEqual(_.drop([1, 2, 3], 0), [1, 2, 3])
    });
  });
});