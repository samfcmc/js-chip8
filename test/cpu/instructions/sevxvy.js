'use strict';

module.exports = function(CPU, assert) {

  describe('SE VX VY', function() {
    var cpu = {};
    var previousPC = 0;
    var opcode = 0x5AB0

    beforeEach(function() {
      cpu = new CPU();
      cpu.registers.pc = 0;
      previousPC = cpu.registers.pc;
      cpu.memory[cpu.registers.pc] = opcode;
    });

    it('PC should be incremented by 2', function() {
      cpu.registers.v[0xA] = 2;
      cpu.registers.v[0xB] = 2;
      cpu.instructions.sevxvy(cpu, opcode);
      assert.equal(cpu.registers.pc, previousPC + 2);
    });

    it('PC should be incremented just by 1', function() {
      cpu.registers.v[0xA] = 1;
      cpu.registers.v[0xB] = 2;
      cpu.instructions.sevxvy(cpu, opcode);
      assert.equal(cpu.registers.pc, previousPC + 1);
    })
  });

};
