var assert = require("chai").assert;
var profit = require("../lib/maxProfit");

describe("maxProfit", function() {
  it("should return 16", function() {
    var result = profit([45,24,35,31,40,38,11]);
    assert(result === 16);
  });
  it("should return 20", function() {
    var result = profit([45,20,35,31,40,38,11]);
    assert(result === 20);
  });

  it("should return 8", function() {
    var result = profit([45,20,3,4,4,7,11]);
    assert(result === 8);
  });
  it("should return -1", function() {
    var result = profit([45,44,43,42,41,40,11]);
    assert(result === -1);
  });
});