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

module.exports = function() {
  describe('Registers', function() {

    var cpu = new CPU();



    describe('Reset', function() {
      it('Before reset mess with registers', function() {
        messWithRegisters(cpu.registers);

        for(var i = 0; i < cpu.registers.v.length; i++) {
          assert.equal(cpu.registers.v[i], FAKE);
        }

        assert.equal(cpu.registers.pc, FAKE);
        assert.equal(cpu.registers.I, FAKE);
      });

      it('After reset all registers must have 0', function() {
        cpu.registers.reset();

        for(var i = 0; i < cpu.registers.v.length; i++) {
          assert.equal(cpu.registers.v[i], 0);
        }

        assert.equal(cpu.registers.pc, 0);
        assert.equal(cpu.registers.I, 0);
      })

    });
  });
}
