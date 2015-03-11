'use strict';

var FAKE = 0xFF;

module.exports = function(CPU, assert) {
  describe('RET', function() {
    var cpu = {};
    var previousSP = 0;

    before(function() {
      cpu = new CPU();
      cpu.registers.sp = 2;
      cpu.stack[cpu.registers.sp] = FAKE;
      previousSP = cpu.registers.sp;
      cpu.instructions.ret(cpu);
    })


    it('PC should have what was in the top of the stack', function() {
      assert.equal(cpu.registers.pc, cpu.stack[previousSP]);
    });

    it('SP should be decremented', function() {
      assert.equal(cpu.registers.sp, previousSP - 1);
    });
  });
};
