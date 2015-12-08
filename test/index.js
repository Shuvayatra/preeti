var assert = require('assert');
var preeti = require('../preeti.js');

describe("Converting Preeti", function() {
  it('should return काठमाण्डू when the value is sf7df08"', function() {
    var ret = preeti('sf7df08"');
    assert.equal(ret, "काठमाण्डू");
  });
});
