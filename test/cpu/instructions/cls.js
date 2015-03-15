'use strict';

var FAKE = 0xFF;

module.exports = function(CPU, assert, testPC) {

  function messWithGFX(gfx) {
    for(var i = 0; i < gfx.length; i++) {
      gfx[i] = FAKE;
    }
  }

  function checkGFX(gfx, value) {
    for(var i = 0; i < gfx.length; i++) {
      assert.equal(gfx[i], value);
    }
  }

  describe('CLS', function() {
    var cpu = {};
    var oldpc = 0;
    var opcode = 0x00E0;

    beforeEach(function() {
      cpu = new CPU();
      oldpc = cpu.registers.pc;
    });

    it('Before CLS mess with GFX', function() {
      messWithGFX(cpu.gfx);
      checkGFX(cpu.gfx, FAKE);
    });

    it('After CLS GFX must be filled with 0', function() {
      cpu.instructions.cls(cpu, opcode);
      checkGFX(cpu.gfx, 0);
    });
    //testPC(oldpc, cpu.registers.pc, 1);
  });
};
