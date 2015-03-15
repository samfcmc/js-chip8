'use strict';

module.exports = function(CPU, assert) {
  describe('SE VX byte', function() {
    var cpu = {};
    var previousPC = 0;
    var opcode = 0x3AFE;

    beforeEach(function() {
      cpu = new CPU();
      cpu.registers.pc = 0;
      previousPC = cpu.registers.pc;
      cpu.memory[cpu.registers.pc] = opcode;
    });

    it('PC should be incremented by 2', function() {
      cpu.registers.v[0xA] = 0xFE;
      cpu.instructions.sevxbyte(cpu, opcode);
      assert.equal(cpu.registers.pc, previousPC + 2);
    });

    it('PC should be incremented by just 1', function() {
      cpu.registers.v[0xA] = 0xEF;
      cpu.instructions.sevxbyte(cpu, opcode);
      assert.equal(cpu.registers.pc, previousPC + 1);
    });

  });
}
