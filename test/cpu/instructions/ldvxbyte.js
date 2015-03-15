'use strict';

module.exports = function(CPU, assert, testPC) {
  describe('LD Vx Byte', function() {
    var cpu = {};
    var opcode = 0x6AFE;
    var previousPC = 0;

    before(function() {
      cpu = new CPU();
      cpu.registers.pc = 0;
      previousPC = cpu.registers.pc;
      cpu.registers.v[0xA] = 0;
    });

    it('Register VA should have 0', function() {
      assert.equal(cpu.registers.v[0xA], 0);
    });

    it('After execution VA should have byte FE', function() {
      cpu.instructions.ldvxbyte(cpu, opcode);
      assert.equal(cpu.registers.v[0xA], 0xFE);
    });

    it('PC should be incremented by 1', function() {
      assert.equal(cpu.registers.pc, previousPC + 1);
    })
  });

};
