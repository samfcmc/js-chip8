'use strict';

module.exports = function(CPU, assert, testPC) {
  describe('ADD Vx Byte', function() {
    var cpu = {};
    var opcode = 0x7AFE;
    var previousPC = 0;

    before(function() {
      cpu = new CPU();
      cpu.registers.pc = 0;
      previousPC = cpu.registers.pc;
      cpu.registers.v[0xA] = 0x3;
    });

    it('Register VA should have 0x3', function() {
      assert.equal(cpu.registers.v[0xA], 0x3);
    });

    it('After execution VA should have VA + Byte', function() {
      cpu.instructions.addvxbyte(cpu, opcode);
      assert.equal(cpu.registers.v[0xA], 0xFE + 0x3);
    });

    it('PC should be incremented by 1', function() {
      assert.equal(cpu.registers.pc, previousPC + 1);
    })
  });

};
