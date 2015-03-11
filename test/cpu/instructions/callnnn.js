'use strict';

module.exports = function(CPU, assert) {
  describe('CALL NNN', function() {
    var cpu = {};
    var previousSP = 0;
    var previousPC = 0;

    before(function() {
      cpu = new CPU();
      cpu.registers.sp = 0;
      previousSP = cpu.registers.sp;
      cpu.registers.pc = 0x22FE;
      previousPC = cpu.registers.pc;
      cpu.instructions.callnnn(cpu);
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