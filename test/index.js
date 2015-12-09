var assert = require('assert');
var preeti = require('../preeti.js');

var pv = require('./preeti.vector.json');
var kv = require('./kantipur.vector.json');
var nv = require('./pcs_nepali.vector.json');

describe("Converting Preeti", function() {
  it('should return काठमाण्डू when the value is sf7df08"', function() {
    var ret = preeti('sf7df08"');
    assert.equal(ret, "काठमाण्डू");
  });

  it('should process the nep-tt2utf preeti.vector list', function() {
    for (var a = 0; a < pv.length; a+=2) {
      assert.equal(preeti(pv[a]), pv[a+1]);
    }
  });
});

describe("Converting Kantipur", function() {
  it('should process the nep-tt2utf kantipur.vector list', function() {
    for (var a = 0; a < kv.length; a+=2) {
      assert.equal(preeti(kv[a], 'Kantipur'), kv[a+1]);
    }
  });
});

describe("Converting PCS Nepali", function() {
  it('should process the nep-tt2utf pcs_nepali.vector list', function() {
    for (var a = 0; a < nv.length; a+=2) {
      assert.equal(preeti(nv[a], 'PCS Nepali'), nv[a+1]);
    }
  });
});
