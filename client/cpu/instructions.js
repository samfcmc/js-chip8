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
  },

  ret: function(cpu) {
    cpu.registers.pc = cpu.stack[cpu.registers.sp];
    --cpu.registers.sp;  
  },

  jmpnnn: function(cpu) {
    var address = cpu.registers.pc & 0x0FFF;
    cpu.registers.pc = address;
  }

};
