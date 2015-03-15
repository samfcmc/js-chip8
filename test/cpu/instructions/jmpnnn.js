'use strict';

module.exports = function(CPU, assert) {
  describe('JPM NNN', function() {
    var cpu = {};
    var opcode =  0x12FE;

    before(function() {
      cpu = new CPU();
    });

    it('Put JMP NNN in PC', function() {
      cpu.registers.pc = 0;
      cpu.memory[cpu.registers.pc] = opcode;
      assert.equal(cpu.memory[cpu.registers.pc], opcode);
    });

    it('After JMP NNN PC should have NNN', function() {
      cpu.instructions.jmpnnn(cpu, opcode);
      assert.equal(cpu.registers.pc, 0x02FE);
    });
  });
}
