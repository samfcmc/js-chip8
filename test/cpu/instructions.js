'use strict';

/*
 * Instructions module test
 */

var assert = require('assert');
var CPU = require('../../client/cpu');
var FAKE = 0xFF;

function messWithGFX(gfx) {
  for(var i = 0; i < gfx.length; i++) {
    gfx[i] = FAKE;
  }
}

function checkGFX(gfx, value) {
  for(var i = 0; i < gfx.length; i++) {
    assert.equal(gfx[i], value);
  }
}

module.exports = function() {
  describe('Instructions', function() {

    var cpu = new CPU();

    describe('CLS', function() {
      it('Before CLS mess with GFX', function() {
        messWithGFX(cpu.gfx);
        checkGFX(cpu.gfx, FAKE);
      });

      it('After CLS GFX must be filled with 0', function() {
        cpu.instructions.cls(cpu);
        checkGFX(cpu.gfx, 0);  
      });
    });
  });
};
