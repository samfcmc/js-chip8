'use strict';

/*
 * Instructions module test
 */

var assert = require('assert');
var CPU = require('../../client/cpu');
var FAKE = 0xFF;

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

module.exports = function() {
  describe('Instructions', function() {

    describe('CLS', function() {
      var cpu = new CPU();

      it('Before CLS mess with GFX', function() {
        messWithGFX(cpu.gfx);
        checkGFX(cpu.gfx, FAKE);
      });

      it('After CLS GFX must be filled with 0', function() {
        cpu.instructions.cls(cpu);
        checkGFX(cpu.gfx, 0);
      });
    });

    describe('RET', function() {
      var cpu = new CPU();

      cpu.registers.sp = 2;
      cpu.stack[2] = FAKE;
      var previousSP = cpu.registers.sp;
      cpu.instructions.ret(cpu);

      it('PC should have what is in top of stack after RET', function() {
        assert.equal(cpu.registers.pc, cpu.stack[cpu.registers.sp]);
      });

      it('SP should be decremented', function() {
        assert.equal(cpu.registers.sp, previousSP - 1);
      });
    });

    describe('JPM NNN', function() {
      var cpu = new CPU();

      it('Put JMP NNN in PC', function() {
        cpu.registers.pc = 0x12FE;
        assert.equal(cpu.registers.pc, 0x12FE);
      });

      it('After JMP NNN PC should have NNN', function() {
        cpu.instructions.jmpnnn(cpu);
        assert.equal(cpu.registers.pc, 0x02FE);
      });
    });

    describe('CALL NNN', function() {
      var cpu = new CPU();
      
      cpu.registers.sp = 0;
      var previousSP = cpu.registers.sp;
      cpu.registers.pc = 0x22FE;
      var previousPC = cpu.registers.pc;
      cpu.instructions.callnnn(cpu);

      it('SP should be incremented', function() {
        assert.equal(cpu.registers.sp, previousSP + 1);
      });

      it('Top of stack should have PC', function() {
        assert.equal(cpu.stack[cpu.registers.sp], previousPC);
      });

      it('PC should have the address to jump', function() {
        assert.equal(cpu.registers.pc, 0x02FE);
      });
    })

  });
};
