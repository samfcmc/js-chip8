'use strict';

module.exports = function(CPU, assert) {
  describe('CALL NNN', function() {
    var cpu = {};
    var previousSP = 0;
    var previousPC = 0;
    var opcode = 0x2FE;

    before(function() {
      cpu = new CPU();
      cpu.registers.sp = 0;
      previousSP = cpu.registers.sp;
      cpu.registers.pc = 0;
      cpu.memory[cpu.registers.pc] = opcode;
      previousPC = cpu.registers.pc;
      cpu.instructions.callnnn(cpu, opcode);
    });

    it('SP should be incremented', function() {
      assert.equal(cpu.registers.sp, previousSP + 1);
    });

    it('Top of stack should have PC', function() {
      assert.equal(cpu.stack[cpu.registers.sp], previousPC);
    });

    it('PC should have the address to jump', function() {
      assert.equal(cpu.registers.pc, 0x02FE);
    });
  });
};
