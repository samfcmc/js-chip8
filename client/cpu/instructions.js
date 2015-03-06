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
  jmpnnn: function(cpu) {
    var address = cpu.registers.pc & 0x0FFF;
    cpu.registers.pc = address;
  }
};
