'use strict';

/*
 * Registers Test module
 */

var assert = require('assert');
var CPU = require('../../client/cpu');

var FAKE = 0xFF;

function messWithRegisters(registers) {
  // Mess with all registers
  for(var i = 0; i < registers.v.length; i++) {
    registers.v[i] = FAKE;
  }
  registers.I = FAKE;
  registers.pc = FAKE;
}

function checkRegistersValue(cpu, value) {
  for(var i = 0; i < cpu.registers.v.length; i++) {
    assert.equal(cpu.registers.v[i], value);
  }

  assert.equal(cpu.registers.pc, value);
  assert.equal(cpu.registers.I, value);
}

module.exports = function() {
  describe('Registers', function() {

    var cpu = new CPU();

    describe('Reset', function() {
      it('Before reset mess with registers', function() {
        messWithRegisters(cpu.registers);
        checkRegistersValue(cpu, FAKE);
      });

      it('After reset all registers must have 0', function() {
        cpu.registers.reset();
        checkRegistersValue(cpu, 0);
      });

    });
  });
}
