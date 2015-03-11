'use strict';

module.exports = function(CPU, assert) {
  describe('JPM NNN', function() {
    var cpu = {};

    before(function() {
      cpu = new CPU();
    });

    it('Put JMP NNN in PC', function() {
      cpu.registers.pc = 0;
      cpu.memory[cpu.registers.pc] = 0x12FE;
      assert.equal(cpu.memory[cpu.registers.pc], 0x12FE);
    });

    it('After JMP NNN PC should have NNN', function() {
      cpu.instructions.jmpnnn(cpu);
      assert.equal(cpu.registers.pc, 0x02FE);
    });
  });
}
