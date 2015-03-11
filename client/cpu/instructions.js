'use strict';

/*
 * Instructions
 */

module.exports = {
  //Clear the screen
  cls: function(cpu) {
    for(var i = 0; i < cpu.gfx.length; i++) {
      cpu.gfx[i] = 0;
    }
    ++cpu.registers.pc;
  },

  ret: function(cpu) {
    cpu.registers.pc = cpu.stack[cpu.registers.sp];
    --cpu.registers.sp;
  },

  jmpnnn: function(cpu) {
    var opcode = cpu.memory[cpu.registers.pc];
    var address = opcode & 0x0FFF;
    cpu.registers.pc = address;
  },

  callnnn: function(cpu) {
    var opcode = cpu.memory[cpu.registers.pc];
    var address = opcode & 0x0FFF;
    ++cpu.registers.sp;
    cpu.stack[cpu.registers.sp] = cpu.registers.pc;
    cpu.registers.pc = address;
  },

  sevxbyte: function(cpu) {

  }

};
