'use strict';

/*
 * Registers Test module
 */

var FAKE = 0xFF;

module.exports = function(CPU, assert) {
  function messWithRegisters(registers) {
    // Mess with all registers
    for(var i = 0; i < registers.v.length; i++) {
      registers.v[i] = FAKE;
    }
    registers.I = FAKE;
    registers.pc = FAKE;
    registers.sp = FAKE;
  }

  function checkRegistersValue(cpu, value) {
    for(var i = 0; i < cpu.registers.v.length; i++) {
      assert.equal(cpu.registers.v[i], value);
    }

    assert.equal(cpu.registers.pc, value);
    assert.equal(cpu.registers.I, value);
    assert.equal(cpu.registers.sp, value);
  }

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
